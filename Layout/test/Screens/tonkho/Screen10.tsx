import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useForm, Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';


const dataUser = [
    {
        id: 1,
        name: "GẠO, BỘT, ĐỒ KHÔ CÁC LOẠI",
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                tonkho: 10,
                chonhan: 2,
                mucantoanmin: 8,
                mucantoanmax: 24,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                tonkho: 10,
                chonhan: 2,
                mucantoanmin: 8,
                mucantoanmax: 24,
            }
        ]
    },
    {
        id: 2,
        name: "BÁNH KẸO HẠT MỨT",
        products: [
            {
                id: 5,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                tonkho: 10,
                chonhan: 2,
                mucantoanmin: 8,
                mucantoanmax: 24,
            }
        ]
    },
    {
        id: 3,
        name: "HÀNG TƯƠI SỐNG CÁC LOẠI",
        products: [
            {
                id: 4,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                tonkho: 10,
                chonhan: 2,
                mucantoanmin: 8,
                mucantoanmax: 24,
            }
        ]
    },
    {
        id: 4,
        name: "HÓA MỸ PHẨM",
        products: [
            {
                id: 3,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                tonkho: 10,
                chonhan: 2,
                mucantoanmin: 8,
                mucantoanmax: 24,
            }
        ]
    },

    // Thêm người dùng khác tại đây nếu cần
];

export function Screen10() {
    // background: #704232;

    const navigation = useNavigation(); // Lấy đối tượng navigation
    const [selectedItemCount, setSelectedItemCount] = useState(0);


    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [selectedItemIndexes, setSelectedItemIndexes] = useState({ parentIndex: -1, childIndex: -1 });

    const [selectedButton, setSelectedButton] = useState(""); // State để lưu trạng thái của các nút
    // console.log(posts.length)


    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleBlur = () => {
        setIsPlaceholderVisible(true);
    };

    const calculateTotal = (products: any[]) => {
        // Khởi tạo biến tổng ban đầu
        let total = 0;

        // Duyệt qua từng sản phẩm trong mảng products
        products.forEach(product => {
            // Cộng dồn tổng số lượng từ các trường tonkho, chonhan, mucantoanmin, mucantoanmax
            total += product.tonkho + product.chonhan + product.mucantoanmin + product.mucantoanmax;
        });

        // Trả về tổng số lượng
        return total;
    };

    const handleItemPress = (parentIndex: any, childIndex: undefined) => {
        setSelectedItemIndexes({ parentIndex, childIndex });
    };
    const renderItem = (item: { id?: number; name: any; products: any; }, parentIndex: React.Key | null | undefined) => {
        const isSelected = selectedItemIndexes.parentIndex === parentIndex;
        // console.log(newsItems)

        return (
            <View style={styles.view4} key={parentIndex}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => handleItemPress(parentIndex)}>
                        <Text style={styles.nameitem}>{item.name}</Text>
                    </TouchableOpacity>
                    <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                </View>
                {isSelected && (
                    <View>
                        <View style={styles.view1inview4}>
                            <Text style={styles.textview1inview4}>Tồn kho</Text>
                            <Text style={styles.textview1inview4}>Chờ nhận</Text>
                            <Text style={styles.textview1inview4}>Mức an toàn min</Text>
                            <Text style={styles.textview1inview4}>Mức an toàn max</Text>
                        </View>
                        <>
                            {item.products.map((product: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; product: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; tonkho: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; chonhan: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; mucantoanmin: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; mucantoanmax: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, childIndex: number) => {
                                const isChildSelected = selectedItemIndexes.parentIndex === parentIndex && selectedItemIndexes.childIndex === childIndex;
                                return (
                                    <TouchableOpacity onPress={() => handleItemPress(parentIndex, childIndex)}>
                                        <View style={isChildSelected ? styles.selectedItemProduct : styles.itemProduct}>
                                            <Text>{product.id}. {product.product}</Text>
                                            <View style={styles.itemsoluong}>
                                                <Text style={styles.txtitemsoluong}><Text style={{ fontWeight: 'bold' }}>{product.tonkho}</Text></Text>
                                                <Text style={styles.txtitemsoluong}><Text style={{ fontWeight: 'bold' }}>{product.chonhan}</Text></Text>
                                                <Text style={styles.txtitemsoluong}><Text style={{ fontWeight: 'bold' }}>{product.mucantoanmin}</Text></Text>
                                                <Text style={styles.txtitemsoluong}><Text style={{ fontWeight: 'bold' }}>{product.mucantoanmax}</Text></Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </>
                    </View>
                )}
            </View>
        );
    };






    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text style={styles.text}>Tồn kho</Text>
            </View>
            <View style={styles.view2}>
                <View style={styles.viewheadduoi}>
                    <View style={styles.viewbox}>
                        <Feather name="box" size={24} color="#704232" />
                    </View>
                    <Text style={{ color: '#1F2937' }}>Tổng số lượng: <Text style={{ fontWeight: 'bold', fontSize: 16, }}>{dataUser.reduce((acc, curr) => acc + calculateTotal(curr.products), 0)}</Text></Text>
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
                                    placeholder='Nhập tên mặt hàng/ Nhóm hàng'
                                />
                                <Feather name="search" size={18} color="black" />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                    />
                    {errors.name && <Text style={styles.error}>This field is required</Text>}
                </View>
                <View style={styles.viewscroll}>
                    <ScrollView>
                        {dataUser.map((item, index) => renderItem(item, index))}
                    </ScrollView>
                    <Text>Chú thích:</Text>
                    <Text>?Cận Date</Text>
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
        flex: 1.5,
        color: '#1F2937'
    },
    view2: {
        width: '89%',
        marginTop: 10,
        alignItems: 'center'
    },
    viewbox: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewheadduoi: {
        alignItems: 'center',
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
    viewscroll: {
        marginTop: '1%',
        width: '100%',
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
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
    },
    view1inview4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 32,
        alignItems: 'center',
        borderBottomWidth: 0.7,
    },
    textview1inview4:
    {
        fontSize: 13,
        fontWeight: 'bold',
    },
    itemsoluong: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txtitemsoluong: {
        color: '#575E69',
        fontSize: 16,
        marginRight: '15%',
    },
    selectedItemProduct: {
        padding: 2,
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: '#F482214D',
    },
    itemProduct: {
        padding: 2,
        marginBottom: 3,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.8,
        borderColor: '#E5E7EB',
    },
    chevron: {
        color: '#704232',
    },
    nameitem: {
        color: '#704232',
        fontWeight: 'bold',
    },




});

export default Screen10;


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