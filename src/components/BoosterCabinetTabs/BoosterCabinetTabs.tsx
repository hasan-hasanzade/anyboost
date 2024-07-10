import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AccountSettings from '../AccountSettings/AccountSettings';
import styles from '../AccountSettings/settings.module.scss';
import NewOrders from '../NewOrders/NewOrders';
import Orders from '../Orders/Orders';



const BoosterCabinetTabs = () => {
  return (
    <Tabs>  
        <div className='container flexible'>
            <TabList>
              <Tab>Настройки аккаунта</Tab>
              <Tab>Активные заказы</Tab>
              <Tab>Новые заказы</Tab>
            </TabList>
        </div>
      <div className='tabWrapper'>
          <TabPanel>
           <AccountSettings />
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
}

export default BoosterCabinetTabs;