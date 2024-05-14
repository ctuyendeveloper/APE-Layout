import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';



export function Screen3() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemCount, setSelectedItemCount] = useState(0);

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);


    const [selectedButton, setSelectedButton] = useState(""); // State để lưu trạng thái của các nút

    // Hàm xử lý sự kiện khi người dùng chọn một nút
    const handleButtonPress = (buttonName: React.SetStateAction<string>) => {
        setSelectedButton(buttonName); // Cập nhật trạng thái khi nút được chọn
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
            </View>
            <Image
                style={{ width: '72%', height: '35%', alignSelf: 'flex-end', marginTop: '5%' }} // 35%
                source={require('../assets/error.png')}
            />
            <Text style={styles.check}>Vui lòng kiểm tồn trước khi đặt hàng!</Text>
            <TouchableOpacity style={styles.buttonmove}>
                <Text style={styles.textbuttonmove}>Di chuyển tới kiểm tồn</Text>
                <Feather name="chevron-right" size={24} color="#FFFFFF" />
            </TouchableOpacity>
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
    check: {
        marginTop: '2%', 
        fontSize: 18,
        color: '#704232'
    },
    buttonmove: {
        marginTop: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '51%',
        height: '5%',
        backgroundColor: '#704232',
        gap: 8,
        borderRadius: 8,
        flexDirection: 'row',
    },
    textbuttonmove: {
        fontSize: 15,
        color: '#FFFFFF'
    },

});

export default Screen3;
