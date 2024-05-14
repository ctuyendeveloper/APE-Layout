import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';

const dataUser = [
    {
        id: 1,
        name: "Bộ phận mua hàng",
        mayeucau: "YCMH0001.01",
        timestart: "08:00 20.04",
        timeend: "08:00 21.04",
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                dadat: 10,

            }
        ]
    },
    {
        id: 2,
        name: "Kho tổng - 12 Khổng Tử",
        mayeucau: "YCMH0001.01",
        timestart: "08:00 20.04",
        timeend: "08:00 21.04",
        products: [
            {
                id: 3,
                product: 'Phô mai hun khói Solse 100g - DVT: Bịch',
                dadat: 8,
            }
        ]
    },
    // Thêm người dùng khác tại đây nếu cần
];

export function Screen6() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const renderItem = (item: { id?: number; name: any; mayeucau: any; timestart: any; timeend: any; products: { id: number; product: string; dadat: number; }[]; }, index: number) => {
        const isSelected = selectedItemIndex === index;

        return (
            <View style={styles.viewitem}>
                <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                <TouchableOpacity style={{ marginBottom: '1%' }} onPress={() => setSelectedItemIndex(index)}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: '#575E69' }}>Mã yêu cầu: <Text style={{ fontWeight: 'bold' }}>{item.mayeucau} - {item.products.length} Món</Text></Text>
                    <Text style={{ color: '#575E69' }}>Dự kiến giao: Từ <Text style={{ fontWeight: 'bold' }}>{item.timestart}</Text> đến <Text style={{ fontWeight: 'bold' }}>{item.timeend}</Text></Text>
                </TouchableOpacity>
                {isSelected && (
                    <View style={styles.itemp}>
                        <>
                            {item.products.map((product) => (
                                <View style={styles.itemProduct}>
                                    <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                    <Text style={styles.txtitemproduct}><Text style={{ fontWeight: 'bold' }}>{product.dadat}</Text></Text>
                                </View>
                            ))}
                        </>
                    </View>
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
                <Text style={styles.text}>Chi tiết yêu cầu <Text style={{ fontWeight: 'bold' }}>YCMH0001</Text></Text>
            </View>
            <View style={styles.textbody}>
                <View style={{padding: '1%', paddingHorizontal: '4%'}}>
                    <Text>Mã yêu cầu: <Text style={{fontWeight: 'bold'}}>YCMH0001 - 2 Món</Text></Text>
                    <Text style={{color: '#575E69'}}>Ngày đặt hàng: <Text style={{fontWeight: 'bold'}}>08:00 20.04.2024</Text></Text>
                    <Text style={{color: '#575E69'}}>Bộ phận đặt: <Text style={{fontWeight: 'bold'}}>Barista</Text></Text>
                </View>
                <View>
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
        padding: '1%',
        marginTop: '1%',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB'
    },

});

export default Screen6;
