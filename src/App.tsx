import { useState } from "react";
import Navigation from "./navigation";
import { store } from "./store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { NotificationTriggerProvider } from "./contexts/notificationTrigger";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <LoadingContextProvider>
            <NotificationTriggerProvider>
              <Navigation />
            </NotificationTriggerProvider>
          </LoadingContextProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
