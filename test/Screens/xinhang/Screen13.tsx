import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';





export function Screen13() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [selectedButton, setSelectedButton] = useState("Chờ nhận (2)"); // State để lưu trạng thái của các nút
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const [isModalVisible, setIsModalVisible] = useState(false); // State để điều khiển hiển thị modal
    const [isScreenVisible, setIsScreenVisible] = useState(false);


    // Hàm xử lý sự kiện khi người dùng chọn một nút
    const handleButtonPress = (buttonName: React.SetStateAction<string>) => {
        setSelectedButton(buttonName); // Cập nhật trạng thái khi nút được chọn
    };

    const handleBlur = () => {
        setIsPlaceholderVisible(true);
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };


    const renderItem = (item: { id?: number; mayeucau: any; bophan: any; noinhan: any; detail: any; status: any; products: any; }, index: React.SetStateAction<number>) => {
        const isSelected = selectedItemIndex === index;

        return (
            <View style={styles.viewitem}>
                <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                    <Text style={styles.itemName2}>Mã yêu cầu: <Text style={{ fontWeight: 'bold' }}>{item.mayeucau}</Text></Text>
                    <Text style={styles.itemName}>Bộ phận: <Text style={{ fontWeight: 'bold' }}>{item.bophan}</Text></Text>
                    <Text style={styles.itemName}>Nơi nhận: <Text style={{ fontWeight: 'bold' }}>{item.noinhan}</Text></Text>
                    <Text style={styles.itemName}>{item.detail}</Text>
                </TouchableOpacity>
                {isSelected && (
                    <>
                        <View style={styles.itemContainer}>
                            {item.products.map((product: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; product: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dadat: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; datthem: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                <View style={styles.itemContainer2}>
                                    <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                    <Text style={styles.txtitemproduct}>{product.danhan}/{product.dadat}</Text>
                                </View>
                            ))}
                        </View>
                    </>
                )}
                <View style={styles.viewbuttonbottom}>
                    <View style={item.status === 2 ? styles.newStatus : styles.pendingStatus}>
                        <Text style={item.status === 2 ? styles.newStatusText : styles.pendingStatusText}>
                            {item.status === 2 ? 'Chờ nhận' : 'Nhận 1 phần'}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.itembuttonproducts}><Text style={styles.txtbuttonproducts}>Nhận hàng</Text></TouchableOpacity>
                </View>

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
                        style={[styles.buttonview3, selectedButton === "Chờ nhận (2)" && styles.selectedButton]} // Kiểm tra trạng thái để thay đổi màu nền
                        onPress={() => handleButtonPress("Chờ nhận (2)")} // Xử lý sự kiện khi người dùng chọn nút
                    >
                        <Text style={[styles.textbuttonview3, selectedButton === "Chờ nhận (2)" && styles.selectedButtonText]}>Chờ nhận (2)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonview3, selectedButton === "Chờ giao (2)" && styles.selectedButton]} // Kiểm tra trạng thái để thay đổi màu nền
                        onPress={() => handleButtonPress("Chờ giao (2)")} // Xử lý sự kiện khi người dùng chọn nút
                    >
                        <Text style={[styles.textbuttonview3, selectedButton === "Chờ giao (2)" && styles.selectedButtonText]}>Chờ giao (2)</Text>
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
            </View>
            {/* {selectedButton === "Chờ duyệt (2)" && (
                // <ChildSc4a />
            )}
            {selectedButton === "Chờ nhận (2)" && (
                // <ChildSc4c />
            )} */}

            {selectedButton === "Chờ nhận (2)" && (
                <View style={styles.scrollView}>
                    <View>
                        <ScrollView>
                            {dataUser.map((item, index) => renderItem(item, index))}
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.btntieptheo}>
                        <Feather name="plus" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            )}
            {selectedButton === "Chờ giao (2)" && (
                <View style={styles.scrollView}>
                    <View>
                        <ScrollView>
                            {dataUser.map((item, index) => renderItem(item, index))}
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.btntieptheo}>
                    <Feather name="plus" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            )}
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
        flexDirection: 'row',
        width: '100%',
        height: 36,
    },
    buttonview3: {
        marginLeft: 6,
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
        height: '80%',
        width: '89%',
    },
    viewitem: {
        backgroundColor: '#FFFFFF',
        marginTop: '2%',
        borderRadius: 8,
        padding: 10,
    },
    itemName: {
        fontSize: 13,
        color: '#575E69',

    },
    itemName2: {
        color: '#1F2937',
        fontSize: 13,
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
        marginTop: '2%',
        padding: 4,
        borderTopWidth: 0.8,
        borderColor: '#E5E7EB',
    },
    itemContainer2:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    itemproduct:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    txtitemproduct: {
        color: '#575E69',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtitemproductname: {
        color: '#575E69',
        fontSize: 13,
        width: '80%',
    },
    btntieptheo: {
        position: 'absolute',
        bottom: 40, // điều chỉnh khoảng cách so với bottom tùy ý
        right: 20, // điều chỉnh khoảng cách so với right tùy ý
        width: 36,
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
    btnback: {
        position: 'absolute',
        bottom: 20, // điều chỉnh khoảng cách so với bottom tùy ý
        left: 20, // đặt nút ở bên trái
        backgroundColor: '#F2E6E6',
        borderColor: '#704232',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 36,
        width: 93 // thêm chiều rộng tùy ý
    },
    txtbtnback: {
        fontSize: 15,
        color: '#704232',
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
    newStatus: {
        width: '22%',
        height: 22,
        backgroundColor: '#D82C0D33',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    pendingStatus: {
        width: '25%',
        height: 22,
        backgroundColor: '#FBEDD0',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    newStatusText: {
        color: '#D82C0D',
        fontStyle: 'italic',
    },
    pendingStatusText: {
        color: '#8E370B',
        fontStyle: 'italic',
    },
    viewbutton: {
        marginTop: 8,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewbuttonbottom: {
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itembuttonproducts: {
        backgroundColor: '#704232',
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    txtbuttonproducts: {
        color: '#ffffff',
        fontSize: 15,
    },
    chevron: {
        position: 'absolute',
        alignSelf: 'flex-end',

        right: '5%',
    },

});

export default Screen13;

const dataUser = [
    {
        id: 1,
        mayeucau: "XH001",
        bophan: "Barista - Trịnh Thị Huyền (0377912838)",
        noinhan: "Nơi nhận: 449 Nguyễn Duy Trinh - 5Km",
        detail: "155 Nguyễn Duy Trinh, An Phú, Thủ Đức",
        status: 1,
        products: [
            {
                id: 1,
                product: 'Cà chua bi Đài Loan - DVT: Kg',
                danhan: 7,
                dadat: 8,
            },
            {
                id: 2,
                product: 'Nước lọc tinh khiết Aquafina - DVT: Thùng',
                danhan: 8,
                dadat: 8,
            }
        ]
    },
    {
        id: 2,
        mayeucau: "XH002",
        bophan: "Barista - Trịnh Thị Huyền (0377912838)",
        noinhan: "Nơi nhận: 449 Nguyễn Duy Trinh - 5Km",
        detail: "155 Nguyễn Duy Trinh, An Phú, Thủ Đức",
        status: 2,
        products: [
            {
                id: 3,
                product: 'Phô mai hun khói Solse 100g - DVT: Bịch',
                danhan: 8,
                dadat: 8,
            }
        ]
    },
    // Thêm người dùng khác tại đây nếu cần
];
