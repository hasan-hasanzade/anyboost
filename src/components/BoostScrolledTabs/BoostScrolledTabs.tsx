import React from 'react';
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import Calculator from '../Calculator/Calculator';

type BoostScrolledTabsProps = {
  tabNames: string[];
};

const BoostScrolledTabs: React.FC<BoostScrolledTabsProps> = ({ tabNames }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e: React.MouseEvent, index: number) => {
    setActiveTab(index);
  };

  type TabScreenProps = {
    activeTab: number;
    idx: number;
  };

  const TabScreen: React.FC<TabScreenProps> = ({ activeTab, idx, children }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
      >
        {activeTab === idx && <div className="mx-4">{children}</div>}
      </div>
    );
  };

  const calculatorProps = [
    { type: "premier", inputValue:0, count: 200, elo: "Elo", currentRating: 0, desiredRating: 'Желаемый рейтинг', images: null },
    { type: "premier_calibration", inputValue: 0, count: null, elo: ['Без звания', 'Серый', 'Голубой', 'Синий', 'Фиолетовый', 'Розовый', 'Красный', 'Золотой'], currentRating: null, desiredRating: 'Кол-во побед', images: ['/calc/levels/0.png', '/calc/levels/1.png', '/calc/levels/2.png', '/calc/levels/3.png', '/calc/levels/4.png', '/calc/levels/5.png', '/calc/levels/6.png', '/calc/levels/7.png'] },
    { type: "by_rank", inputValue: null, count: null, elo: ['Серебро 1', 'Серебро 2', 'Серебро 3', 'Серебро 4', 'Серебро-Элита', 'Серебро-Великий Магистр', 'Золотая Звезда-1', 'Золотая Звезда-2', 'Золотая Звезда-3', 'Золотая Звезда-Магистр', 'Магистр Хранитель-1', 'Магистр Хранитель-2', 'Магистр Хранитель-Элита', 'Заслуженный Магистр-Хранитель', 'Магистр Легендарный Беркут', 'Магистр Легендарный Беркут-Магистр', 'Магистр Великий Магистр Высшего Ранга', 'Магистр Всемирная Элита'], currentRating: null, desiredRating: 'Желаемый рейтинг', images: ['/calc/ranks/1.png', '/calc/ranks/2.png', '/calc/ranks/3.png', '/calc/ranks/4.png', '/calc/ranks/5.png', '/calc/ranks/6.png', '/calc/ranks/7.png', '/calc/ranks/8.png', '/calc/ranks/9.png', '/calc/ranks/10.png', '/calc/ranks/11.png', '/calc/ranks/12.png', '/calc/ranks/13.png', '/calc/ranks/14.png', '/calc/ranks/15.png', '/calc/ranks/16.png', '/calc/ranks/17.png', '/calc/ranks/18.png'] },
    { type: "by_wins", inputValue: null, count: null, elo: ['Серебро 1', 'Серебро 2', 'Серебро 3', 'Серебро 4', 'Серебро-Элита', 'Серебро-Великий Магистр', 'Золотая Звезда-1', 'Золотая Звезда-2', 'Золотая Звезда-3', 'Золотая Звезда-Магистр', 'Магистр Хранитель-1', 'Магистр Хранитель-2', 'Магистр Хранитель-Элита', 'Заслуженный Магистр-Хранитель', 'Магистр Легендарный Беркут', 'Магистр Легендарный Беркут-Магистр', 'Магистр Великий Магистр Высшего Ранга', 'Магистр Всемирная Элита'], currentRating: null, desiredRating: 'Кол-во побед', images: ['/calc/ranks/1.png', '/calc/ranks/2.png', '/calc/ranks/3.png', '/calc/ranks/4.png', '/calc/ranks/5.png', '/calc/ranks/6.png', '/calc/ranks/7.png', '/calc/ranks/8.png', '/calc/ranks/9.png', '/calc/ranks/10.png', '/calc/ranks/11.png', '/calc/ranks/12.png', '/calc/ranks/13.png', '/calc/ranks/14.png', '/calc/ranks/15.png', '/calc/ranks/16.png', '/calc/ranks/17.png', '/calc/ranks/18.png'] },
    { type: "calibration", inputValue: null, count: null, elo: ['Серебро 1', 'Серебро 2', 'Серебро 3', 'Серебро 4', 'Серебро-Элита', 'Серебро-Великий Магистр', 'Золотая Звезда-1', 'Золотая Звезда-2', 'Золотая Звезда-3', 'Золотая Звезда-Магистр', 'Магистр Хранитель-1', 'Магистр Хранитель-2', 'Магистр Хранитель-Элита', 'Заслуженный Магистр-Хранитель', 'Магистр Легендарный Беркут', 'Магистр Легендарный Беркут-Магистр', 'Магистр Великий Магистр Высшего Ранга', 'Магистр Всемирная Элита'], currentRating: null, desiredRating: 'Кол-во побед', images: ['/calc/levels/0.png', '/calc/levels/1.png', '/calc/levels/2.png', '/calc/levels/3.png', '/calc/levels/4.png', '/calc/levels/5.png', '/calc/levels/6.png', '/calc/levels/7.png'] },
  ];

  return (
    <div className="App">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {tabNames.map((name, index) => (
          <Tab key={index}>{name}</Tab>
        ))}
      </Tabs>
      {tabNames.map((name, index) => (
        <TabScreen activeTab={activeTab} idx={index} key={index}>
          <Calculator {...calculatorProps[index]} />
        </TabScreen>
      ))}
    </div>
  );
};

export default BoostScrolledTabs;
