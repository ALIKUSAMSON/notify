// @flow

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import Calendar from './Calendar';
import type Moment from 'moment';
import faker from 'faker';
import moment from 'moment';
import Events from './Events';

export type EventType = {
  date: Moment,
  title: string,
  description: string,
  image: string,
}; 

// Generate fake event data
const FAKE_EVENTS: Array<EventType> = (() => {
  const startDay = moment().subtract(3, 'days').startOf('day');
  return [...new Array(64)].map(_ => ({
    date: startDay.add(4, 'hours').clone(),
    title: faker.company.companyName(),
    description: faker.lorem.sentence(),
    // use random dimensions to get random urls
    image: faker.image.nightlife(Math.floor(Math.random() * 200) + 100, Math.floor(Math.random() * 200) + 100),
  }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<EventType> =>
  FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));

export default class AppNavigator extends React.Component {

  state = {
    events: filterEvents(moment()),
  };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
          <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
          <Events events={events} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F53B1',
    paddingTop: 20,
  },
});