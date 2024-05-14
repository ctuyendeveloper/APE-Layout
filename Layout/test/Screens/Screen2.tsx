import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';
import { getPost } from '../helper/api';




export function Screen2() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemCount, setSelectedItemCount] = useState(0);

    const { data: posts, isLoading, isError } = getPost();

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [quantityInputs, setQuantityInputs] = useState(posts ? Array(posts.length).fill({ value: "", error: "" }) : []);
    console.log(posts)
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const [selectedButton, setSelectedButton] = useState(""); // State để lưu trạng thái của các nút
    const newsItems = Array.isArray(posts) ? posts : [posts]; // Đảm bảo rằng newsItems luôn là một mảng
    // console.log(posts.length)

    // Hàm xử lý sự kiện khi người dùng chọn một nút
    const handleButtonPress = (buttonName: React.SetStateAction<string>) => {
        setSelectedButton(buttonName); // Cập nhật trạng thái khi nút được chọn
    };


    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleBlur = () => {
        setIsPlaceholderVisible(true);
    };
    const getProvinceNameById = (id: string) => {
        const ProvinceObject = datachon.find(city => city.key === id);
        return ProvinceObject ? ProvinceObject.value : ""; // Trả về giá trị value nếu tìm thấy đối tượng, ngược lại trả về chuỗi rỗng
    };

    const handleChangeQuantity = (value: string, index: number) => {
        const newQuantityInputs = [...quantityInputs];
        const quantityValue = parseInt(value);

        if (quantityValue > parseInt(posts[index].PRODUCT_TONKHO)) {
            newQuantityInputs[index] = { value, error: "Quá tồn kho tối đa" };
        } else {
            newQuantityInputs[index] = { value, error: "" };
        }

        setQuantityInputs(newQuantityInputs);
    };
    const renderItem = (item: { PRODUCT_ID: any; PRODUCT_NAME: any; PRODUCT_TONKHO: any; PRODUCT_MUCANTOAN: any; }, index: number) => {
        const isSelected = selectedItemIndex === index;
        // console.log(newsItems)

        return (
            <View style={styles.item} key={index}>
                <TouchableOpacity style={styles.itemmain} onPress={() => setSelectedItemIndex(index)}>
                    {isSelected && (
                        <>
                            <TouchableOpacity>
                                <Feather name="edit" size={20} style={styles.iconedit} />
                            </TouchableOpacity>

                        </>
                    )}
                    <Text style={styles.txtten}>{item.PRODUCT_ID}. {item.PRODUCT_NAME}</Text>
                    <View style={styles.tonkho}>
                        <Text style={styles.txttonkho}>Tồn kho: <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#575E69' }}>{item.PRODUCT_TONKHO}</Text></Text>
                        <Text style={styles.txtmucantoan}>Mức an toàn: <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#575E69' }}>{item.PRODUCT_MUCANTOAN}</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TextInput
                        style={styles.itembutton}
                        keyboardType="numeric"
                        placeholder="10 Con"
                        value={quantityInputs[index]?.value}
                        onChangeText={(value) => handleChangeQuantity(value, index)}
                    />
                    <TextInput
                        style={styles.itembutton}
                        keyboardType="numeric"
                        placeholder="0"
                    />
                </View>
                {quantityInputs[index]?.error !== "" && <Text style={styles.error}>{quantityInputs[index]?.error}</Text>}
                {isSelected && (
                    <>
                        <Text>Lý do đặt thêm<Text style={{ color: 'red' }}>*</Text></Text>
                        <SelectList
                            setSelected={(val: string) => {
                                const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                                setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                            }}
                            data={datachon}
                            boxStyles={{ borderRadius: 8, elevation: 2, borderWidth: 0.5, backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5 }}
                        />
                    </>
                )}

            </View>
        );
    };
    if (isLoading) return <ActivityIndicator />;
    if (isError) return <Text>Error fetching posts</Text>;






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
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.input}>
                                <TextInput

                                    onBlur={() => { onBlur(); handleBlur(); }}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    onSubmitEditing={handleSubmit(onSubmit)} // Handle submit when pressing "OK" or "Enter"
                                    placeholder='Nhập tên mặt hàng'
                                />
                                <Feather name="search" size={18} color="black" />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                    />
                    {errors.name && <Text style={styles.error}>This field is required</Text>}
                </View>
                <Text style={styles.texttotal}>Tổng cộng (món): <Text style={{ fontWeight: 'bold', color: '#1F2937', fontStyle: 'italic' }}>{posts.length}</Text></Text>
                <View style={styles.view4}>
                    <View style={styles.view1inview4}>
                        <Text style={styles.textview1inview4}>Số lượng đặt</Text>
                        <Text style={styles.textview1inview4}>Đặt thêm</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {posts.map((item: { PRODUCT_ID: any; PRODUCT_NAME: any; PRODUCT_TONKHO: any; PRODUCT_MUCANTOAN: any; }, index: number) => renderItem(item, index))}
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity style={styles.btntieptheo}>
                <Text style={styles.txtbtntieptheo}>Tiếp theo</Text>
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
    inputContainer: {
        marginTop: '2%',
        position: 'relative',
        width: '100%',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        height: 32,
        width: '100%',
        borderRadius: 19,
        paddingHorizontal: 20,
    },
    error: {
        color: 'red',
    },
    texttotal: {
        marginTop: '1%',
        alignSelf: 'flex-start',
        color: '#1F2937',
        fontSize: 18,
        lineHeight: 24,
        fontStyle: 'italic'
    },
    view4: {
        borderRadius: 8,
        marginTop: 5,
        width: '100%',
        height: '58%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
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
    scrollViewContent: {
        alignItems: 'center',
    },
    item: {
        width: '93%',
        height: 'auto',
        borderBottomWidth: 0.2
    },
    itemmain: {
        marginTop: 10,
        width: '100%',
        height: 55,
    },
    tonkho: {
        marginTop: 2,
        flexDirection: 'row',
    },
    txttonkho: {
        color: '#575E69',
        width: 114,
        fontSize: 13,
    },
    txtten: {
        width: 280,
        fontSize: 13,
        fontWeight: 'bold'
    },
    txtmucantoan: {
        color: '#575E69',
        width: 166,
        fontSize: 13,
    },
    button: {
        marginTop: 6,
        width: '100%',
        height: 34,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 13,
    },
    itembutton: {
        textAlign: 'center',
        color: '#704232',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: 8,
        borderColor: '#704232',
        borderWidth: 1,
        width: '48%',
        height: 34,
    },
    btntieptheo: {
        position: 'absolute',
        bottom: 20, // điều chỉnh khoảng cách so với bottom tùy ý
        right: 20, // điều chỉnh khoảng cách so với right tùy ý
        width: 93,
        backgroundColor: '#704232',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 36
    },
    txtbtntieptheo: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    iconedit: {
        color: '#704232',
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    selectedButton: {
        backgroundColor: '#704232', // Màu nền được chọn
        color: 'white'
    },
    selectedButtonText: {
        color: 'white'
    },

});

export default Screen2;


// const Dataproduct = [
//     {
//         id: 1,
//         name: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
//         tonkho: '20',
//         mucantoan: '40',
//     },
//     {
//         id: 2,
//         name: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
//         tonkho: '20',
//         mucantoan: '40',
//     },
//     {
//         id: 3,
//         name: 'Phô mai hun khói Solse 100g - DVT: Bịch',
//         tonkho: '20',
//         mucantoan: '40',
//     },

// ];

const datachon = [
    { key: '1', value: 'Có nhiều tiền nên đặt thêm ấy' },
    { key: '2', value: 'Tôi thích đặt thêm' }
]