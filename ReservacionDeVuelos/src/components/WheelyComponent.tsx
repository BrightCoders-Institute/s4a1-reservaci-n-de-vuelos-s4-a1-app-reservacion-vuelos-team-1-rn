// import React, {useState} from 'react';
// import WheelPicker from 'react-native-wheely';

// function Wheely() {
//   const [selected, setSelected] = useState('1');

//   return (
//     <WheelPicker
//       options={['1', '2', '3']}
//       selected={selected}
//       onChange={passengers => setSelected(passengers)}
//     />
//   );
// }

// export default Wheely;

import {View, Text} from 'react-native';
import React from 'react';

const WheelyComponent = () => {
  return (
    <View>
      <Text>WheelyComponent</Text>
    </View>
  );
};

export default WheelyComponent;
