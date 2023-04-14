import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './nearbyjobcard.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { checkImageURL } from '../../../../utils/index';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job.employer_logo,
          }}
          // source={{
          //   uri: !checkImageURL(job.employer_logo)
          //     ? job.employer_logo
          //     : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          // }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
