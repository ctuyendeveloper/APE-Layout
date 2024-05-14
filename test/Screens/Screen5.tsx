import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';



export function Screen5() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation


    const [selectedButton, setSelectedButton] = useState(""); // State để lưu trạng thái của các nút
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    // Hàm xử lý sự kiện khi người dùng chọn một nút
    const handleButtonPress = (buttonName: React.SetStateAction<string>) => {
        setSelectedButton(buttonName); // Cập nhật trạng thái khi nút được chọn
    };


    const renderItem = (item: { id: number; name: string; products: { id: number; product: string; dadat: number; datthem: number; }[]; }, index: number) => {
        const isSelected = selectedItemIndex === index;

        return (
            <View style={styles.viewitem}>
                <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemtime}>Dự kiến giao: Từ <Text style={{ fontWeight: 'bold' }}>08:00 20.04</Text> đến <Text style={{ fontWeight: 'bold' }}>08:00 21.04</Text></Text>
                    <Text style={styles.itemtotalproduct}>Số món: <Text style={{ fontWeight: 'bold' }}>{item.products.length}</Text></Text>
                </TouchableOpacity>
                {isSelected && (
                    <>
                        <View style={styles.view1inview4}>
                            <Text style={styles.textview1inview4}>Số lượng đặt</Text>
                            <Text style={styles.textview1inview4}>Đặt thêm</Text>
                        </View>
                        {item.products.map((product, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                <View style={styles.itemproduct}>
                                    <Text style={styles.txtitemproduct}>{product.dadat}</Text>
                                    <Text style={styles.txtitemproduct}>{product.datthem}</Text>
                                </View>
                            </View>
                        ))}
                    </>
                )}
            </View>
        );
    };



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Danh sách yêu cầu mua hàng</Text>
            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <TouchableOpacity
                        style={[styles.buttonview3, selectedButton === "Tạo Mới" && styles.selectedButton]} // Kiểm tra trạng thái để thay đổi màu nền
                        onPress={() => handleButtonPress("Tạo Mới")} // Xử lý sự kiện khi người dùng chọn nút
                    >
                        <Text style={[styles.textbuttonview3, selectedButton === "Tạo Mới" && styles.selectedButtonText]}>Tạo Mới</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonview3, selectedButton === "Chờ duyệt (2)" && styles.selectedButton]} // Kiểm tra trạng thái để thay đổi màu nền
                        onPress={() => handleButtonPress("Chờ duyệt (2)")} // Xử lý sự kiện khi người dùng chọn nút
                    >
                        <Text style={[styles.textbuttonview3, selectedButton === "Chờ duyệt (2)" && styles.selectedButtonText]}>Chờ duyệt (2)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonview3, selectedButton === "Chờ nhận (2)" && styles.selectedButton]} // Kiểm tra trạng thái để thay đổi màu nền
                        onPress={() => handleButtonPress("Chờ nhận (2)")} // Xử lý sự kiện khi người dùng chọn nút
                    >
                        <Text style={[styles.textbuttonview3, selectedButton === "Chờ nhận (2)" && styles.selectedButtonText]}>Chờ nhận (2)</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollView}>
                    <ScrollView>
                        {dataUser.map((item, index) => renderItem(item, index))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    header: {
        padding: 10,
        height: '11%',
        width: '100%',
        backgroundColor: '#E5D8CF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        alignSelf: 'flex-end',
        flex: 1,
    },
    text: {
        fontSize: 18,
        alignSelf: 'flex-end',
        flex: 3,
        color: '#1F2937'
    },
    view2: {
        width: '89%',
        marginTop: 10,
        alignItems: 'center'
    },
    view3: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 36,
    },
    buttonview3: {
        width: '30%',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbuttonview3: {
        fontSize: 14,
        lineHeight: 28,
        color: 'black'
    },
    selectedButton: {
        backgroundColor: '#704232', // Màu nền được chọn
        color: 'white'
    },
    selectedButtonText: {
        color: 'white'
    },
    scrollView: {
        width: '100%',
    },
    viewitem: {
        backgroundColor: '#FFFFFF',
        marginTop: '2%',
        borderRadius: 8,
        padding: 6,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#1F2937',
    },
    itemtime: {
        marginTop: 3,
        fontSize: 13,
        color: '#575E69',
    },
    itemtotalproduct: {
        marginTop: 3,
        fontSize: 13,
        color: '#575E69',
    },
    view1inview4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 32,
        alignItems: 'center',
        borderBottomWidth: 0.7,
    },
    textview1inview4:
    {
        fontSize: 13,
        fontWeight: 'bold',
    },
    itemContainer:
    {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E7EB'
    },
    itemproduct:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    txtitemproduct: {
        flex: 1,
        textAlign: 'center',
        color: '#575E69',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtitemproductname: {
        color: '#575E69',
        fontSize: 13
    },


});

export default Screen5;

const dataUser = [
    {
        id: 1,
        name: "Bộ phận mua hàng",
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
                datthem: 0,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                dadat: 10,
                datthem: 3,

            }
        ]
    },
    {
        id: 2,
        name: "Kho hàng 12 Khổng Tử",
        products: [
            {
                id: 3,
                product: 'Phô mai hun khói Solse 100g - DVT: Bịch',
                dadat: 8,
                datthem: 0,
            }
        ]
    },
    // Thêm người dùng khác tại đây nếu cần
];
