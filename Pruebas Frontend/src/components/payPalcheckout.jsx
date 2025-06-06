import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ amount = 100.00, onSuccess, onError }) {
  const createOrder = async () => {
    try {
      const response = await fetch(
        'https://pocketcenter-backend.vercel.app/api/paypal/create-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount 
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('Error al crear la orden');
      }
      
      const order = await response.json();
      return order.id;
    } catch (err) {
      onError(err);
      throw err;
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const response = await fetch(
        'https://pocketcenter-backend.vercel.app/api/paypal/capture-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderID: data.orderID
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('Error al capturar el pago');
      }
      
      const captureData = await response.json();
      onSuccess(captureData);
    } catch (err) {
      onError(err);
    }
  };

  return (
    <div style={{ maxWidth: '750px', minHeight: '200px', margin: '0 auto' }}>
      <PayPalScriptProvider 
        options={{ 
          "client-id": "AXSS4dtnRC6boUJeK3tcL_ijaw43cDA6a42JzTxziY4zbFRUPI_rymC8j5nxJiI3CvpbgKl63aIQbYWH",
          "currency": "USD",
          "components": "buttons",
          "intent": "capture"
        }}
      >
        <PayPalButtons
          style={{ 
            layout: "vertical",
            shape: "rect",
            color: "gold",
            height: 55
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}