import { useState } from "react";
import Navigation from "./navigation";
import { store } from "./store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { NotificationTriggerProvider } from "./contexts/notificationTrigger";
import { SocketProvider } from "./contexts/SocketContext";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
        <SocketProvider >          
          <LoadingContextProvider>
            <NotificationTriggerProvider>
              <Navigation />
            </NotificationTriggerProvider>
          </LoadingContextProvider>
        </SocketProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
