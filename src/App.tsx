import { BrowserRouter as Router } from "react-router-dom";
import Routs from "./Router";
import CardProvider from "./providers/Card/CardProvider";
import { NotificationProvider } from "./providers/Notification";
import { SettingsProvider } from "./providers/Settings";
function App() {
  return (
    <Router>
      <SettingsProvider>
        <CardProvider>
          <NotificationProvider>
            <Routs />
          </NotificationProvider>
        </CardProvider>
      </SettingsProvider>
    </Router>
  );
}

export default App;
