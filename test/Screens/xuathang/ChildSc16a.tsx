import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';


export function ChildSc16a() {

    const [isChecked, setIsChecked] = React.useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = React.useState(true);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    const navigation = useNavigation(); // Lấy đối tượng navigation

    const renderItem = (item: { id?: number; sopr: any; name: any; detail: any; ngaydathang: any; ngaygiao: any; status: any; products: any; }, index: React.SetStateAction<number>) => {
        const isStatusOne = item.status === 1;
        const isSelected = selectedItemIndex === index;

        return (
            <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                <View style={styles.item}>
                    <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                    <Text>Số PR: <Text style={{ fontWeight: 'bold' }}>{item.sopr}</Text></Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text>{item.detail}</Text>
                    <Text style={{ color: '#575E69' }}>Cần giao: Từ <Text style={{ fontWeight: 'bold' }}>{item.ngaydathang}</Text> đến <Text style={{ fontWeight: 'bold' }}>{item.ngaygiao}</Text></Text>
                    <View style={styles.viewitembottom}>
                        <View style={item.status === 2 ? styles.newStatus : styles.pendingStatus}>
                            <Text style={item.status === 2 ? styles.newStatusText : styles.pendingStatusText}>
                                {item.status === 2 ? 'Chưa giao' : 'Giao 1 phần'}
                            </Text>
                        </View>
                        <View style={styles.viewbutton}>
                            <TouchableOpacity style={styles.itembuttonproducts}>
                                <Feather name="shopping-cart" size={16} color="#FFFFFF" />
                                <Text style={styles.txtbuttonproducts}>Giao</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isSelected && (
                        <>
                            <View style={styles.itemContainer}>

                                {item.products?.map((product: {
                                    statusgiao: number; id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; product: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; danhan: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dadat: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
}) => (
                                    <View style={styles.itemProduct}>
                                        <Text style={styles.txtitemproductname}><Text style={{ fontWeight: 'bold' }}>{product.id}. {product.product}</Text></Text>
                                        <Text style={styles.txtitemproductname}>Cần giao lúc: <Text style={{ fontWeight: 'bold' }}>{product.cangiao}</Text></Text>
                                        <View style={styles.itemProduct2}>
                                            <Text style={styles.txtitemproductname}>Đặt hàng <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.dathang}</Text></Text>
                                            <Text style={styles.txtitemproductname}>Đã giao <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.dagiao}</Text></Text>
                                            <Text style={styles.txtitemproductname}>Đang giao <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.danggiao}</Text></Text>
                                        </View>
                                        <View style={styles.viewitembottom2}>
                                            <View style={product.statusgiao === 2 ? styles.newStatus : styles.pendingStatus}>
                                                <Text style={product.statusgiao === 2 ? styles.newStatusText : styles.pendingStatusText}>
                                                    {product.statusgiao === 2 ? 'Chưa giao' : 'Giao 1 phần'}
                                                </Text>
                                            </View>
                                            <View style={styles.viewbutton}>
                                                <TouchableOpacity style={styles.itembuttonproducts}>
                                                    <Feather name="shopping-cart" size={16} color="#FFFFFF" />
                                                    <Text style={styles.txtbuttonproducts}>Giao</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
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
                        <Text style={styles.txtview1in2}>Chưa giao</Text>
                        <Text style={styles.txt2view1in2}>01</Text>
                    </View>
                    <View style={styles.view1in2}>
                        <Text style={styles.txtview1in2}>Giao 1 phần</Text>
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
                                    placeholder='Nhập tên điểm cần giao'
                                />
                                <Feather name="search" size={18} color="black" />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                    />
                </View>
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
        width: '100%',
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
        marginTop: '1%',
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
        borderRadius: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 6,
        paddingHorizontal: 8,
    },
    txtbuttonproduct: {
        color: '#704232',
        fontSize: 15,
    },
    txtbuttonproducts: {
        marginLeft: '2%',
        color: '#ffffff',
        fontSize: 15,
    },
    itemContainer:
    {
        marginTop: '1%',
        borderTopWidth: 1,
    },
    itemProduct2:
    {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    txtitemproductname:
    {
        color: '#575E69',
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
    viewitembottom: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewitembottom2: {
        marginVertical: '2%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    itemProduct: {
        borderBottomWidth: 1,
        borderColor: '#E5E7EB',
    },


});

const Data = [
    {
        id: 1,
        sopr: 'PR21042024',
        name: 'Xưởng Rang',
        detail: '12 Khổng Tử, Bình Thọ, Thủ Đức',
        ngaydathang: '09:00 20.04',
        ngaygiao: '09:00 21.04',
        status: 1,
        products: [
            {
                id: 1,
                product: 'Nhân bánh Burger - DVT: Cái',
                cangiao: '09:00 20.04.2024',
                dathang: 40,
                dagiao: 20,
                danggiao: 0,
                statusgiao: 1,
            },
            {
                id: 2,
                product: 'Nước dùng phở bò Mỹ - DVT: Lít',
                cangiao: '09:00 20.04.2024',
                dathang: 2,
                dagiao: 0,
                danggiao: 0,
                statusgiao: 2,
            }
        ]
    },
    {
        id: 2,
        sopr: 'PR21042024',
        name: 'Xưởng Rang',
        detail: '12 Khổng Tử, Bình Thọ, Thủ Đức',
        ngaydathang: '09:00 20.04',
        ngaygiao: '09:00 21.04',
        status: 2,
        products: [
            {
                id: 1,
                product: 'Nhân bánh Burger - DVT: Cái',
                cangiao: '09:00 20.04.2024',
                dathang: 40,
                dagiao: 20,
                danggiao: 0,
                statusgiao: 1,
            },
            {
                id: 2,
                product: 'Nước dùng phở bò Mỹ - DVT: Lít',
                cangiao: '09:00 20.04.2024',
                dathang: 2,
                dagiao: 0,
                danggiao: 0,
                statusgiao: 2,
            }
        ]
    },
];

export default ChildSc16a;
