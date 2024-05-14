import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';


const dataUser = [
    {
        id: 1,
        product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
        dathang: 2,
        danhan: 0,
    },
    {
        id: 2,
        product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
        dathang: 40,
        danhan: 20,
    },
    // Thêm người dùng khác tại đây nếu cần
];
const datachon = [
    { key: '1', value: 'Có nhiều tiền nên đặt thêm ấy' },
    { key: '2', value: 'Tôi thích đặt thêm' }
]

export function Screen9() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [selectedProvince, setSelectedProvince] = useState("");
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

    const renderItem = (item: { id: any; product: any; dathang: any; danhan: any; }, index: React.SetStateAction<number>) => {
        const isSelected = selectedItemIndex === index;

        return (
            <View style={styles.viewitem}>
                <TouchableOpacity style={{ marginBottom: '1%' }} onPress={() => setSelectedItemIndex(index)}>
                    <Text>{item.id}. {item.product}</Text>
                    <View style={styles.viewdathang}>
                        <Text style={styles.dathang}>Đặt hàng <Text style={{ fontWeight: 'bold' }}>{item.dathang}</Text></Text>
                        <Text style={styles.dathang}>Đã nhận <Text style={{ fontWeight: 'bold' }}>{item.danhan}</Text></Text>
                        <Text style={styles.dathang}>Còn lại <Text style={{ fontWeight: 'bold' }}>{item.dathang - item.danhan}</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewthucnhan}>
                    <Text>Thực nhận</Text>
                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.input}>
                                    <TextInput
                                        style={{ fontSize: 18, color: '#704232', fontWeight: 'bold' }}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        keyboardType="numeric"
                                        placeholder='Nhập'
                                    />
                                </View>
                            )}
                            name={`product_${index}`} // Sử dụng tên duy nhất cho mỗi TextInput
                            rules={{ required: true }}
                        />
                    </View>
                </View>
                {
                    isSelected && (
                        <View style={styles.itemp}>
                            <Text>Lý do thiếu hàng<Text style={{ color: 'red' }}>*</Text></Text>
                            <SelectList
                                setSelected={(val: string) => {
                                    const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                                    setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                                }}
                                data={datachon}
                                boxStyles={{ borderRadius: 8, elevation: 2, borderWidth: 0.5, backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5 }}
                            />
                        </View>
                    )
                }
                {errors[`product_${index}`] && <Text style={styles.error}>This field is required</Text>}
            </View >
        );
    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Nhận hàng</Text>
            </View>
            <View style={styles.textbody}>
                <View style={{ padding: '1%', paddingHorizontal: '4%' }}>
                    <Text><Text style={{ fontWeight: 'bold' }}>Sói Biển</Text> - Số PO/Số PXK: <Text style={{ fontWeight: 'bold' }}>PO0001</Text></Text>
                    <Text style={{ color: '#575E69' }}>Dự kiến giao: Từ<Text style={{ fontWeight: 'bold' }}> 08:00 20.04</Text> đến <Text style={{ fontWeight: 'bold' }}>08:00 21.04</Text></Text>
                    <Text style={{ color: '#575E69' }}>Bộ phận: <Text style={{ fontWeight: 'bold' }}>Bếp - 2 Món</Text></Text>
                    <Text style={{ color: '#575E69' }}>Người đặt: <Text style={{ fontWeight: 'bold' }}>Trịnh Thị Thùy - 0377912838</Text></Text>
                </View>
                <View>
                    <ScrollView>
                        {dataUser.map((item, index) => renderItem(item, index))}
                    </ScrollView>
                </View>
                <Text style={{marginTop: '2%'}}>Hình ảnh chứng tử<Text style={{color: 'red'}}>*</Text></Text>
                <View style={styles.viewanhchungtu}>
                    <TouchableOpacity>
                        <Feather name="box" size={80} color="#1F2937" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="box" size={80} color="#1F2937" />
                    </TouchableOpacity>
                </View>
                <Text>File đính kèm (nếu có):</Text>
                <TouchableOpacity style={styles.nutfile}>
                    <Feather name="box" size={80} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btntieptheo}>
                <Text style={styles.txtbtntieptheo}>Lưu</Text>
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
        flex: 1.5,
        color: '#1F2937'
    },
    textbody: {
        width: '91%',
    },
    viewitem: {
        backgroundColor: '#FFFFFF',
        marginTop: '2%',
        borderRadius: 8,
        padding: 6,
    },
    itemProduct:
    {
        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtitemproductname:
    {
        fontSize: 13,
        color: '#575E69',
        height: '100%',
        width: 270,
    },
    txtitemproduct:
    {
        fontSize: 16,
        width: 30,
        color: '#575E69',
    },
    chevron: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '10%',
        right: '5%',
    },
    itemp:
    {
        marginTop: '1%',
    },
    error: {
        color: 'red',
    },
    viewdathang: {
        flexDirection: 'row',
    },
    dathang: {
        width: '22%',
        color: '#575E69',
    },
    viewthucnhan: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputContainer: {
        marginTop: '2%',
        marginLeft: 3,
        width: '75%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#704232',
    },
    input: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    btntieptheo: {
        position: 'absolute',
        bottom: 20, // điều chỉnh khoảng cách so với bottom tùy ý
        right: 20, // điều chỉnh khoảng cách so với right tùy ý
        width: '88%',
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
    viewanhchungtu: {
        marginTop: '1%',
        marginLeft: '2%',
        flexDirection: 'row',
        width: '50%',
        marginBottom: '1%',
    },
    nutfile : {
        marginTop: '1%',
        marginLeft: '2%',
        marginBottom: '1%',
    }
});

export default Screen9;
