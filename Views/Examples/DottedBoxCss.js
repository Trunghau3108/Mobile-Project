// .DottedBox {
//     margin: 40px;
//     border: 5px dotted pink;
//   }
  
//   .DottedBox_content {
//     font-size: 15px;
//     text-align: center;
//   }
  import { StyleSheet } from "react-native"
  const styles = StyleSheet.create({
    DottedBox: {
          margin: 40,
          border: 5,
          backgroundColor: 'red'
        },
        
    DottedBox_content: {
          fontSize: 15,
          alignItems: 'center',
        }
  });
  export default styles