import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent, deleteArchiveEvents } from "../api";
import moment from 'moment';

// class EventStore {
//   _id;
//   theme = '';
//   comment = '';
//   date = new Date();
//   archive = false;
//   favorite = false;
//
//   constructor({_id, theme, comment, date, archive, favorite}) {
//     makeAutoObservable(this, {}, {
//       autoBind: true
//     });
//
//     this._id = _id;
//     this.theme = theme;
//     this.comment = comment;
//     this.date = date;
//     this.archive = archive;
//     this.favorite = favorite;
//   }
// }

class EventsStore {
  data = [];
  filteredData = [].filter(x => !x.archive)

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
      // archiveData: computed,
      // notArchiveData: computed,
    });

    onBecomeObserved(this, 'data', this.fetch);
  }

  get allData() {
    // return this.data.map(event => new EventStore(event))
    return this.data
  }

  get archiveData() {
    return this.data
    // .map(event => new EventStore(event)).filter(x => x.archive)
    .filter(x => x.archive)
  }

  get notArchiveData() {
    return this.data
    // .map(event => new EventStore(event)).filter(x => !x.archive)
      .filter(x => !x.archive)
  }

  get pastData(){
    return this.data
      // .map(event => new EventStore(event))
      // .filter(x => moment(x.date).isBefore(moment(), 'day') && !x.archive)
      .filter(x => moment(x.date).isBefore(moment(), 'day'))
  }

  get todayData(){
    return this.data
      // .map(event => new EventStore(event))
      // .filter(x => moment(x.date).isSame(moment(), 'day') && !x.archive)
      .filter(x => moment(x.date).isSame(moment(), 'day'))
  }

  get futureData(){
    return this.data
      // .map(event => new EventStore(event))
      // .filter(x => moment(x.date).isAfter(moment(), 'day') && !x.archive)
      .filter(x => moment(x.date).isAfter(moment(), 'day'))
  }

  get favoriteData () {
    return this.data
      // .map(event => new EventStore(event))
      // .filter(x => x.favorite && !x.archive)
      .filter(x => x.favorite)
  }

  // Сортировка работает совместно с фильтрацией.
  get newerDataSorting () {
    return this.filteredData
      .slice()
      .sort((a, b) => moment(b.date) - moment(a.date))
  }

  get olderDataSorting () {
    return this.filteredData
      .slice()
      .sort((a, b) => moment(a.date) - moment(b.date))
  }

  get defaultDataSorting () {
    // Но при такой реализации я получаю последнюю выбранную сортировку, а не начальный вид.

    return this.filteredData
  }
  // Так же хотелось бы, чтобы добавление/удаление карты в избранное или архив не сбрасывали текущую фильтрацию/сортировку
  *fetch() {
    const response = yield getEvents();
    this.data = response
    this.filteredData = response.filter(x => !x.archive)
    // this.data = response.map(event => new EventStore(event));
    // this.filteredData = response.map(event => new EventStore(event)).filter(x => !x.archive);
  }

  *addEvent(data) {
    yield addEvent(data)
    yield this.fetch();
  }

  *editEvent(data) {
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id)
    yield this.fetch();
  }

  *deleteArchiveEvents(data) {
    yield deleteArchiveEvents(data)
    yield this.fetch();
  }
}

export const events = new EventsStore();
