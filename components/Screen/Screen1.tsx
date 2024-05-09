import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const Data = [
    {
        id: 1,
        name: 'Yêu cầu đặt hàng',
        image: require('../../assets/images/1.png'),
    },
    {
        id: 2,
        name: 'Xuất hàng',
        image: require('../../assets/images/2.png'),
    },
    {
        id: 3,
        name: 'Xin hàng',
        image: require('../../assets/images/3.png'),
    },
    {
        id: 4,
        name: 'Nhận hàng',
        image: require('../../assets/images/4.png'),
    },
    {
        id: 5,
        name: 'Hủy hàng',
        image: require('../../assets/images/5.png'),
    },
    {
        id: 6,
        name: 'Tồn Kho',
        image: require('../../assets/images/6.png'),
    },
    {
        id: 7,
        name: 'Chuyển Kho',
        image: require('../../assets/images/7.png'),
    },
    {
        id: 8,
        name: 'Kiểm kho',
        image: require('../../assets/images/8.png'),
    },
    {
        id: 9,
        name: 'Sản xuất',
        image: require('../../assets/images/9.png'),
    },

];

export function Screen1() {
    const navigation = useNavigation(); // Lấy đối tượng navigation
    const handleItemPress = (item: { id: any; name?: any; image?: any; }) => {
        // Xử lý khi một mục được chọn
        switch (item.id) {
            case 1:
                console.log('Yêu cầu đặt hàng'); // Điều hướng đến màn hình 'Yêu cầu đặt hàng'
                break;
            case 2:
                console.log('Xuất hàng'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 3:
                console.log('Xin hàng'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 4:
                console.log('Nhận hàng'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 5:
                console.log('Hủy hàng'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 6:
                console.log('Tồn kho'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 7:
                console.log('Chuyển kho'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 8:
                console.log('Kiểm kho'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            case 9:
                console.log('Xuất hàng'); // Điều hướng đến màn hình 'Xuất hàng'
                break;
            default:
            // Mặc định, không làm gì cả
        }
    };

    const renderItem = (item: { id: any; name: any; image: any; }) => (
        <TouchableOpacity style={styles.box} key={item.id} onPress={() => handleItemPress(item)}>
            <Image
                style={{ width: 42, height: 42 }} // 35%
                source={item.image}
            />
            <Text style={styles.txtNameProduct}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.viewheader1}>
                    <Image style={{ width: 48, height: 48, borderRadius: 24 }} source={require('../../assets/images/avatar.png')} />
                    <View style={styles.viewheader2}>
                        <Text style={styles.textview1}>3002- Nguyễn Thị Thanh Hà</Text>
                        <Text style={styles.textview2}>Barista</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image
                        style={{ width: 26, height: 26, marginBottom: 10 }} // 35%
                        source={require('../../assets/images/button.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {Data.map((item) => renderItem(item))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    header: {
        height: '11%',
        width: '100%',
        backgroundColor: '#E5D8CF',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },
    viewheader1: {
        alignItems: 'center',
        width: '66%',
        height: '56%',
        flexDirection: 'row',
        marginBottom: 7,
    },
    viewheader2: {
        marginLeft: 8
    },
    textview1: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19
    },
    textview2: {
        fontSize: 13,
        lineHeight: 16
    },
    scrollViewContent: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10%',
    },
    box: {
        justifyContent: 'center',
        marginBottom: '5%',
        width: 120, // 31%
        height: 120, // 17%
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#7A81BE',
        elevation: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    txtNameProduct: {
        fontSize: 14,
        color: '#1F2937',
        lineHeight: 28,
        fontWeight: 'bold'
    },
});

export default Screen1;
