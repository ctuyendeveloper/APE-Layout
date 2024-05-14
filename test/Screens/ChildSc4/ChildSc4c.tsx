import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';


export function ChildSc4c() {

    const [isChecked, setIsChecked] = React.useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = React.useState(true);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    const navigation = useNavigation(); // Lấy đối tượng navigation

    const renderItem = (item: { id?: number; madathang: any; ngaydathang: any; ngaygiao: any; bophandat: any; status: any; products: any; }, index: React.SetStateAction<number>) => {
        const isStatusOne = item.status === 1;
        const isSelected = selectedItemIndex === index;

        return (
            <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                <View style={styles.item}>
                    <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                    <Text style={{ fontWeight: 'bold' }}>{item.madathang}</Text>
                    <Text style={{ color: '#575E69' }}>Dự kiến giao: Từ <Text style={{ fontWeight: 'bold' }}>{item.ngaydathang}</Text> đến <Text style={{ fontWeight: 'bold' }}>{item.ngaygiao}</Text></Text>
                    <Text style={{ color: '#575E69' }}>Bộ phận: <Text style={{ fontWeight: 'bold' }}>Bếp - {item.products?.length} Món</Text></Text>
                    <Text style={{ color: '#575E69' }}>Người đặt: <Text style={{ fontWeight: 'bold' }}>{item.bophandat === 1 ? 'Trịnh Thị Thùy - 0377912838' : 'Unknow'}</Text></Text>
                    <View style={item.status === 2 ? styles.newStatus : styles.pendingStatus}>
                        <Text style={item.status === 2 ? styles.newStatusText : styles.pendingStatusText}>
                            {item.status === 2 ? 'Chờ duyệt' : 'Nhận 1 phần'}
                        </Text>
                    </View>
                    {isSelected && (
                        <>
                            <View style={styles.itemContainer}>

                                {item.products?.map((product: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; product: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; danhan: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dadat: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                    <View style={styles.itemProduct}>
                                        <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                        <Text style={styles.txtitemproductdadat}><Text style={{ fontWeight: 'bold' }}>{product.danhan}/{product.dadat}</Text></Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                    <View style={styles.viewbutton}>
                        <TouchableOpacity style={styles.itembuttonproducts}><Text style={styles.txtbuttonproducts}>Nhận hàng</Text></TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )

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
                <View style={styles.view1in1}>
                    <View style={styles.view1in2}>
                        <Text style={styles.txtview1in2}>Tổng cộng</Text>
                        <Text style={styles.txt2view1in2}>02</Text>
                    </View>
                    <View style={styles.view1in2}>
                        <Text style={styles.txtview1in2}>Chờ nhận</Text>
                        <Text style={styles.txt2view1in2}>01</Text>
                    </View>
                    <View style={styles.view1in2}>
                        <Text style={styles.txtview1in2}>Nhận 1 phần</Text>
                        <Text style={styles.txt2view1in2}>01</Text>
                    </View>
                </View>
            </View>
            {/* <FlatList
                keyExtractor={(item) => item.id}
                data={Data}
                renderItem={renderItem}
            /> */}
            <View style={styles.inputContainer}>
                <View style={styles.inputmain}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.input}>
                                <TextInput

                                    onBlur={() => { onBlur(); handleBlur(); }}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    onSubmitEditing={handleSubmit(onSubmit)} // Handle submit when pressing "OK" or "Enter"
                                    placeholder='Nhập mã Po/ Tên nhà cung cấp'
                                />
                                <Feather name="search" size={18} color="black" />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                    />
                </View>
                <TouchableOpacity>
                    <Feather style={{ marginLeft: 5 }} name="maximize" size={36} color="black" />
                </TouchableOpacity>
            </View>
            {errors.name && <Text style={styles.error}>This field is required</Text>}

            <ScrollView>
                {Data.map((item, index: number) => renderItem(item, index))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '82%',
        width: '89%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    view1in1: {
        paddingTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    view1in2: {
        alignItems: 'center',
    },
    txtview1in2: {
        fontSize: 13,
        color: '#1F2937',
    },
    txt2view1in2: {
        fontSize: 24,
        color: '#1F2937',
        fontWeight: 'bold',

    },
    txtview1in3: {
        fontSize: 13,
        color: '#704232',
    },
    txtview1in1: {
        marginLeft: 8,
        fontSize: 15,
        color: '#1F2937',
    },
    inputContainer: {
        marginBottom: '2%',
        marginTop: '2%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputmain: {

        justifyContent: 'center',
        marginBottom: 6,
        width: '88%',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 19,
        paddingHorizontal: 20,
    },
    error: {
        paddingBottom: '2%',
        color: 'red',
    },
    item: {
        borderRadius: 8,
        padding: 8,
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        marginBottom: 8,

    },
    checkboxContainer1: {
        padding: 4,
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    viewbutton: {
        marginTop: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itembuttonproduct: {
        borderColor: '#704232',
        borderWidth: 1,
        backgroundColor: '#F2E6E6',
        borderRadius: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '28%',
        height: 36,
    },
    itembuttonproducts: {
        backgroundColor: '#704232',
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    txtbuttonproduct: {
        color: '#704232',
        fontSize: 15,
    },
    txtbuttonproducts: {
        color: '#ffffff',
        fontSize: 15,
    },
    itemContainer:
    {
        borderTopWidth: 0.8,
        borderTopColor: '#E5E7EB'
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
        color: '#1F2937',
        height: '100%',
        width: '84%',
    },
    txtitemproductdadat:
    {
        fontSize: 16,
        width: 30,
        color: '#575E69',
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
    chevron: {
 
        position: 'absolute',
        alignSelf: 'flex-end',
  
        right: '5%',
    },
    selectedItem: {
        backgroundColor: '#FBEDD0', // Màu nền khi item được chọn
    },

});

const Data = [
    {
        id: 1,
        madathang: 'Sói Biển - Số PO/Số PXK: PO0001',
        ngaydathang: '08:00 20.04',
        ngaygiao: '08:00 21.04',
        bophandat: 1,
        status: 1,
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
                danhan: 2,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                dadat: 8,
                danhan: 0,
            }
        ]
    },
    {
        id: 2,
        madathang: 'Kho tổng - 12 Khổng Tử',
        ngaydathang: '08:00 20.04.2024',
        ngaygiao: '08:00 21.04',
        bophandat: 1,
        status: 2,
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
                danhan: 0,
            },
        ]
    },
];

export default ChildSc4c;
