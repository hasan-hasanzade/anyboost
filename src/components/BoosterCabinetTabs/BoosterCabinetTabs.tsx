import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountSettings from "../AccountSettings/AccountSettings";
import styles from "../AccountSettings/settings.module.scss";
import NewOrders from "../NewOrders/NewOrders";
import Orders from "../Orders/Orders";
import { IUser } from "@/store/services/userApi";

interface IProps {
  user: IUser | undefined;
}

const BoosterCabinetTabs = ({ user }: IProps) => {
  return (
    <Tabs>
      <div className="container flexible">
        <TabList>
          <Tab>Настройки аккаунта</Tab>
          <Tab>Активные заказы</Tab>
          <Tab>Новые заказы</Tab>
        </TabList>
      </div>
      <div className="tabWrapper">
        <TabPanel>
          <AccountSettings user={user} />
        </TabPanel>
        <TabPanel>
          <Orders />
        </TabPanel>
        <TabPanel>
          <NewOrders />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default BoosterCabinetTabs;
