import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSeparator: {
    minHeight: StyleSheet.hairlineWidth,
    opacity: 0.6,
    backgroundColor: '#404041',
  },
  renderItem: {
    height: 120,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  renderTitle: {
    fontSize: 17,
    fontWeight: '500',
    paddingVertical: 10,
  },
  renderUserName: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 5,
    paddingVertical: 10,
  },
  renderItemSeparator: {
    minHeight: StyleSheet.hairlineWidth,
    opacity: 0.3,
    backgroundColor: '#404041',
    marginHorizontal: 5,
  },
});
