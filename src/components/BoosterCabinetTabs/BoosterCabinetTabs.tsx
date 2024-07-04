import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AccountSettings from '../AccountSettings/AccountSettings';
import styles from '../AccountSettings/settings.module.scss';
import Orders from '../Orders/Orders';


const BoosterCabinetTabs = () => {
  return (
    <Tabs>  
        <div className='container flexible'>
            <TabList>
              <Tab>Настройки аккаунта</Tab>
              <Tab>Заказы</Tab>
            </TabList>
        </div>
      <div className='tabWrapper'>
          <TabPanel>
           <AccountSettings />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
      </div>
    </Tabs>
  );
}

export default BoosterCabinetTabs;