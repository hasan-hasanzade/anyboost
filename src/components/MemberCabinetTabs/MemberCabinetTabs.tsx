import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountSettings from "../AccountSettings/AccountSettings";
import styles from "../AccountSettings/settings.module.scss";
import Orders from "../Orders/Orders";
import { IUser } from "@/store/services/userApi";

interface IProps {
  user: IUser | undefined;
}

const MemberCabinetTabs = ({ user }: IProps) => {
  return (
    <Tabs>
      <div className="container flexible">
        <TabList>
          <Tab>Настройки аккаунта</Tab>
          <Tab>Заказы</Tab>
        </TabList>
        <div className={styles.boost}>Заказать новый буст</div>
      </div>
      <div className="tabWrapper">
        <TabPanel>
          <AccountSettings user={user} />
        </TabPanel>
        <TabPanel>
          <Orders />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default MemberCabinetTabs;
