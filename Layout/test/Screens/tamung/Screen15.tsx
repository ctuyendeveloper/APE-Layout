import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';



const datachon = [
    { key: '1', value: 'Bếp' },
    { key: '2', value: 'Phòng Nấu' }
]
const datachon2 = [
    { key: '1', value: 'Trần Minh Nhân' },
    { key: '2', value: 'Nguyễn Công Tuyền' }
]
const datachon3 = [
    { key: '1', value: 'Phí mua CCDC' },
    { key: '2', value: 'Phí mua CCDC2' }
]

export function Screen15() {
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




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Tạo mới tạm ứng</Text>
            </View>
            <View style={styles.body}>
                <Text>Bộ phận<Text style={{ color: 'red' }}>*</Text></Text>
                <SelectList
                    setSelected={(val: string) => {
                        const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                        setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                    }}
                    data={datachon}
                    boxStyles={{ borderRadius: 8, elevation: 2, borderWidth: 0.5, backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5 }}
                />
                <Text>Nhân viên<Text style={{ color: 'red' }}>*</Text></Text>
                <SelectList
                    setSelected={(val: string) => {
                        const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                        setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                    }}
                    data={datachon2}
                    boxStyles={{ borderRadius: 8, elevation: 2, borderWidth: 0.5, backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5 }}
                />
                <Text>Chọn lọc chi phí<Text style={{ color: 'red' }}>*</Text></Text>
                <SelectList
                    setSelected={(val: string) => {
                        const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                        setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                    }}
                    data={datachon3}
                    boxStyles={{ borderRadius: 8, elevation: 2, borderWidth: 0.5, backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5 }}
                />
                <Text>Nhập số tiền (VNĐ)<Text style={{ color: 'red' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.input}>
                                <TextInput
                                    keyboardType='numeric'
                                    onBlur={() => { onBlur(); handleBlur(); }}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    onSubmitEditing={handleSubmit(onSubmit)} // Handle submit when pressing "OK" or "Enter"
                                    placeholder='200.000'
                                />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                    />
                    {errors.name && <Text style={styles.error}>This field is required</Text>}
                </View>
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
        flex: 2,
        color: '#1F2937'
    },
    body: {
        padding: 8,
        width: '89%',
    },
    inputContainer: {
        marginTop: '2%',
        position: 'relative',
        width: '100%',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderWidth: 0.8,
        borderRadius: 8,
        height: '31%',
        paddingHorizontal: 18,
        borderColor: '#575E6999',
        elevation: 5,
    },
    error: {
        color: 'red',
    },
    btntieptheo: {
        position: 'absolute',
        bottom: 20,
        width: '89%',
        backgroundColor: '#704232',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 36,
    },
    txtbtntieptheo: {
        fontSize: 15,
        color: '#FFFFFF',
    },

});

export default Screen15;
