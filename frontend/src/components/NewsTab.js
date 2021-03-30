import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import BusinessNewsScreen from '../screens/BusinessNewsScreen';
import EntertainmentNewsScreen from '../screens/EntertainmentNewsScreen';
import GeneralNewsScreen from '../screens/GeneralNewsScreen';
import HealthNewsScreen from '../screens/HealthNewsScreen';
import ScienceNewsScreen from '../screens/ScienceNewsScreen';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import SportsNewsScreen from '../screens/SportsNewsScreen';
import TechNewsScreen from '../screens/TechNewsScreen';

const NewsTab = () => {
  const [key, setKey] = useState('general');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="general" title="General">
        <GeneralNewsScreen />
      </Tab>

      <Tab eventKey="business" title="Business">
        <BusinessNewsScreen />
      </Tab>
      <Tab eventKey="science" title="Science">
        <ScienceNewsScreen />
      </Tab>
      <Tab eventKey="health" title="Healthy">
        <HealthNewsScreen />
      </Tab>

      <Tab eventKey="sports" title="Sports">
        <SportsNewsScreen />
      </Tab>

      <Tab eventKey="technology" title="Technology">
        <TechNewsScreen />
      </Tab>
      <Tab eventKey="entertainment" title="Entertaining">
        <EntertainmentNewsScreen />
      </Tab>
      <Tab eventKey="gaming" title="Gaming"></Tab>
      <Tab eventKey="search" title="Search">
        <SearchNewsScreen />
      </Tab>
    </Tabs>
  );
};

export default NewsTab;
