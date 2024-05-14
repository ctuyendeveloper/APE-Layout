import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';

const dataUser = [
    {
        id: 1,
        product: 'Nước dùng Phở - DVT: Lít',
        dathang: 40,
        dagiao: 20,
        danggiao: 0,
        conlai: 20,
    },
    {
        id: 2,
        product: 'Nhân bánh Burger- DVT: Cái',
        dathang: 40,
        dagiao: 20,
        danggiao: 0,
        conlai: 20,
    },
    // Thêm sản phẩm khác tại đây nếu cần
];

export function Screen17() {
    const navigation = useNavigation();
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Data:', data);
    };

    const renderItem = (item: { id: any; product: any; dathang: any; dagiao: any; danggiao: any; conlai: any; }, index: React.Key | null | undefined) => {
        const fieldName = `product_${item.id}`;
        const [text, setText] = useState('');

        const onChangeText = (value: string) => {
            setText(value);
            setValue(fieldName, value); // Set value to the corresponding field
        };

        return (
            <View style={styles.viewitem} key={index}>
                <TouchableOpacity style={{ marginBottom: '1%' }}>
                    <Text style={{fontWeight: 'bold'}}>{item.product}</Text>
                    <View style={styles.viewdathang}>
                        <Text style={styles.dathang}>Đặt hàng <Text style={{ fontWeight: 'bold' }}>{item.dathang}</Text></Text>
                        <Text style={styles.dathang}>Đã giao <Text style={{ fontWeight: 'bold' }}>{item.dagiao}</Text></Text>
                        <Text style={styles.dathang}>Đang giao <Text style={{ fontWeight: 'bold' }}>{item.danggiao}</Text></Text>
                        <Text style={styles.dathang}>Còn lại <Text style={{ fontWeight: 'bold' }}>{item.conlai}</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewthucnhan}>
                    <Text>Thực giao</Text>
                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            name={fieldName}
                            rules={{ required: 'Trường này là bắt buộc' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={() => {
                                        console.log(`Blurred field: ${fieldName}`);
                                        onBlur();
                                    }}
                                    onChangeText={onChangeText}
                                    value={text}
                                    keyboardType="numeric"
                                    placeholder='Nhập'
                                />
                            )}
                        />
                    </View>
                </View>
                {errors[fieldName] && <Text style={styles.error}>Cái này sao để trống được</Text>}
            </View>
        );
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Giao hàng</Text>
            </View>
            <View style={styles.textbody}>
                <View style={{ padding: '1%', paddingHorizontal: '4%' }}>
                    <Text style={{ fontWeight: 'bold' }}>Xưởng Rang 12</Text>
                    <Text style={{ color: '#575E69' }}>12 Khổng Tử, Bình Thọ, Thủ Đức</Text>
                    <Text style={{ color: '#575E69' }}>Cần giao: Từ <Text style={{ fontWeight: 'bold' }}>08:00 20.04</Text> đến <Text style={{ fontWeight: 'bold' }}>08:00 21.04</Text></Text>
                </View>
                <View style={styles.scrollview}>
                    <ScrollView>
                        {dataUser.map((item, index) => renderItem(item, index))}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.viewnote}>
                <Text style={styles.textnote}>Ghi chú</Text>
                <TextInput
                    style={styles.inputMultiLine}
                    multiline={true}
                    numberOfLines={4} // Số dòng tối đa bạn muốn hiển thị
                />
            </View>
            <TouchableOpacity style={styles.btntieptheo} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.txtbtntieptheo}>Lưu</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
        width: '88%',
    },
    viewitem: {
        margin: '1%',
        backgroundColor: '#FFFFFF',
        padding: 6,
    },
    scrollview: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    viewdathang: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
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
        marginLeft: '3%',
        width: '75%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#704232',
    },
    input: {
        textAlign: 'center',
        paddingHorizontal: 10,
        height: 40,
        fontSize: 18,
        color: '#704232',
        fontWeight: 'bold',
    },
    error: {
        marginTop: '2%',
        color: 'red',
    },
    btntieptheo: {
        position: 'absolute',
        bottom: 20,
        right: 20,
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
    inputMultiLine: {
        paddingHorizontal: 10,
        height: 100, // Điều chỉnh chiều cao tùy ý
        fontSize: 14,
        color: '#704232',
        borderWidth: 0.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    viewnote: {
        marginVertical: '1%',
        width: '88%',
    },
    textnote: {
        marginBottom: '2%',
    },
});

export default Screen17;
