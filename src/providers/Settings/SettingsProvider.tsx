import React from "react";

type TSettings = {
  error: boolean;
};
type TSettingsContext = {
  handleError: (status: boolean) => void;
} & TSettings;

const SettingsContext = React.createContext<TSettingsContext | null>(null);

type TProps = {
  children: React.ReactElement;
};
const SettingsProvider: React.FC<TProps> = ({ children }) => {
  const [settings, setSettings] = React.useState<TSettings>({ error: false });
  const handleError = (status: boolean) =>
    setSettings((prev) => ({ ...prev, error: status }));
  const value: TSettingsContext = {
    ...settings,
    handleError,
  };
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

export const useSettings = () => {
  const settings = React.useContext(SettingsContext);
  if (!settings) throw Error("need to be under settings provider");
  return settings as TSettingsContext;
};
