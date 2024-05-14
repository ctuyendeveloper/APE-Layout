import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator, ViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';


const dataUser = [
    {
        id: 1,
        name: "Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg",
        location: [
            {
                id: 1,
                name: "12 Khổng tử",
                detail: "12 Khổng tử, Bình thọ, Thủ đức",
                tonkho: 6,
                km: 5,
            },
            {
                id: 2,
                name: "Ame Nguyễn Duy Trinh",
                detail: "409 Nguyễn Duy Trinh, Bình Trưng Đông, Q2",
                tonkho: 6,
                km: 3,
            }
        ]
    },
    {
        id: 2,
        name: "Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg",
        location: [
            {
                id: 1,
                name: "12 Khổng tử",
                detail: "12 Khổng tử, Bình thọ, Thủ đức",
                tonkho: 6,
                km: 5,
            },
            {
                id: 2,
                name: "Ame Nguyễn Duy Trinh",
                detail: "409 Nguyễn Duy Trinh, Bình Trưng Đông, Q2",
                tonkho: 6,
                km: 5.7,
            }
        ]
    }
];

export function Screen11() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation

    const [selectedProvince, setSelectedProvince] = useState("");
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

    const getProvinceNameById = (id: string) => {
        const ProvinceObject = datachon.find(city => city.key === id);
        return ProvinceObject ? ProvinceObject.value : ""; // Trả về giá trị value nếu tìm thấy đối tượng, ngược lại trả về chuỗi rỗng
    };
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleBlur = () => {
        setIsPlaceholderVisible(true);
    };


    const renderItem = (item: { id: any; name: any; location: any; }, index: number) => {
        // const isSelected = selectedItemIndex === index;
        // console.log(newsItems)

        return (
            // key={index}
            <View style={styles.item}>
                <Text style={{fontWeight: 'bold'}}>{item.id}. {item.name}</Text>
                {item.location.map((locaiton: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; km: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; tonkho: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; detail: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <View>
                        <View style={styles.namekm}>
                            <Text style={styles.txtnamekm}>{locaiton.name} - {locaiton.km}Km</Text>
                            <Text style={styles.txttonkho}>{locaiton.tonkho}</Text>
                            <View style={styles.inputitem}>
                                <TextInput
                                    style={styles.itembutton}
                                    keyboardType="numeric"
                                    placeholder="Nhap SL"
                                />
                            </View>
                        </View>
                        <Text>{locaiton.detail}</Text>
                    </View>
                ))}
            </View>
        );
    };






    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Tạo mới lệnh xin hàng</Text>
            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
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
                                        placeholder='Nhập nhóm hàng'
                                    />
                                    <Feather name="chevron-down" size={18} color="black" />
                                </View>
                            )}
                            name="name"
                            rules={{ required: true }}
                        />
                        {errors.name && <Text style={styles.error}>This field is required</Text>}
                    </View>
                    <TouchableOpacity style={styles.buttonaddress}>
                        <Feather name="map-pin" size={16} color="black" />
                        <Text style={styles.txtbtnaddress}>Gần nhất</Text>
                    </TouchableOpacity>
                </View>

                {/* <Text style={styles.texttotal}>Tổng cộng (món): <Text style={{ fontWeight: 'bold', color: '#1F2937', fontStyle: 'italic' }}>{posts.length}</Text></Text> */}
                <View style={styles.view4}>
                    <View style={styles.view1inview4}>
                        <Text style={styles.textview1inview4}>Kho</Text>
                        <Text style={styles.textview2inview4}>Tồn kho</Text>
                        <Text style={styles.textview3inview4}>SL</Text>
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {dataUser.map((item, index) => renderItem(item, index))}
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
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    buttonganday: {
        flexDirection: 'row',
        width: '30%',


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
        marginTop: '1%',
        position: 'relative',
        width: '70%',
        borderRadius: 19,
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
    buttonaddress: {
        padding: 8,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
    },
    error: {
        color: 'red',
    },
    txtbtnaddress: {
        marginLeft: '2%',
        color: '#575E69',
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
        backgroundColor: '#FFFFFF',
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
        flex: 4,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textview2inview4:
    {
        flex: 2,
        fontSize: 13,
        fontWeight: 'bold',
    },
    textview3inview4:
    {
        flex: 1,
        fontSize: 13,
        fontWeight: 'bold',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    item: {
        marginTop: '1%',
        width: '93%',
        height: 'auto',
        borderBottomWidth: 0.9,
        borderColor: '#E5E7EB',
    },
    namekm: {
        alignItems: 'flex-end',
        width: '100%',
        flexDirection: 'row',
    },
    txtnamekm: {
        color: '#575E69',
        fontWeight: 'bold',
        paddingHorizontal: '4%',
        flex: 3,

    },
    txttonkho: {
        color: '#575E69',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 16,
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
        marginTop: '5%',
        textAlign: 'center',
        color: '#704232',
        fontSize: 16,
        borderRadius: 8,
        borderColor: '#704232',
        borderWidth: 1,

    },
    inputitem: {
        flex: 1,
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

export default Screen11;


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