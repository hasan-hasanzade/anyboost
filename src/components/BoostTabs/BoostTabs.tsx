import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BoostCounter from '../BoostCounter/BoostCounter';

const BoostTabs = () => {
  const tabNamesCs = [
    "Премьер",
    "Премьер калибровка",
    "По званию",
    "По победам",
    "Калибровка",
    "Напарники по званию",
    "Напарники по победам",
    "Напарники калибровка"
  ];
  const tabNamesFace = [
    "По эло",
    "По уровню",
    "По победам",
    "Калибровка",
  ];

  return (
    <Tabs>  
      <div className="container">
        <TabList>
          <Tab>CS2</Tab>
          <Tab>FaceIT</Tab>
        </TabList>
      </div>
      <TabPanel>
        <BoostCounter tabNames={tabNamesCs} />
      </TabPanel>
      <TabPanel>
        <BoostCounter tabNames={tabNamesFace} />
      </TabPanel>
    </Tabs>
  );
}

export default BoostTabs;

