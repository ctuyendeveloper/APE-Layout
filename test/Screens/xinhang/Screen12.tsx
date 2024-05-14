import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';

const dataUser = [
    {
        id: 1,
        name: "12 Khổng Tử - 5Km",
        mayeucau: "12 Khổng Tử, Bình Thọ, Thủ Đức",
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
        name: "Americano - 5Km",
        mayeucau: "10 Hồng Đức, Bình Thọ, Thủ Đức",
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

export function Screen12() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const renderItem = (item: { id?: number; name: any; mayeucau: any; products: any; }, index: number) => {
        const isSelected = selectedItemIndex === index;

        return (
            <View style={styles.viewitem}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: '#575E69' }}>{item.mayeucau}</Text>
                <View style={styles.itemp}>
                    <>
                        {item.products.map((product: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; product: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dadat: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                            <View style={styles.itemProduct}>
                                <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                <Text style={styles.txtitemproduct}><Text style={{ fontWeight: 'bold' }}>{product.dadat}</Text></Text>
                            </View>
                        ))}
                    </>
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
                <Text style={styles.text}>Tạo mới lệnh xin hàng</Text>
            </View>
            <View style={styles.textbody}>
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
        padding: 8,
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

export default Screen12;
