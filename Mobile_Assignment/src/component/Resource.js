import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './Resource.style';
import {fetchResource, fetchUser} from '../actions/actions';

type Props = {
  getResource: (resource: string) => void,
  getUserInfo: (user: string) => void,
  resource: Object,
  loading: boolean,
  user: Object,
};

const Resource = (props: Props) => {
  const {getResource, resource, loading, getUserInfo, user} = props;

  useEffect(() => {
    getResource('posts');
    getUserInfo('users');
  }, []);

  const renderList = () => {
    return (
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        data={resource}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    );
  };

  const extractKey = (item, index) => `${item}-${index}`;

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Text style={styles.renderTitle}>Title: {item.title}</Text>
        <View style={styles.renderItemSeparator} />
        <Text style={styles.renderUserName}>
          UserName: {renderUserName(item.id)}
        </Text>
      </View>
    );
  };

  const renderUserName = (id: Number) => {
    for (const userDat of user) {
      if (userDat.id === id) {
        return userDat.name;
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return <View style={styles.container}>{renderList()}</View>;
};

const mapDispatchToProps = (dispatch) => ({
  getResource: (resource) => dispatch(fetchResource(resource)),
  getUserInfo: (user) => dispatch(fetchUser(user)),
});
const mapStateToProps = (state) => ({
  loading: state.resourceReducer.isFetching,

  resource: state.resourceReducer.resource,
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
