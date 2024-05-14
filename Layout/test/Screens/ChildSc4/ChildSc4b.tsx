import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Feather } from '@expo/vector-icons';


export function ChildSc4b() {

    const [isChecked, setIsChecked] = React.useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    const navigation = useNavigation(); // Lấy đối tượng navigation

    const renderItem = (item: { id?: number; madathang: any; ngaydathang: any; bophandat: any; status: any; products?: { id: number; product: string; dadat: number; }[]; }, index: number) => {
        const isStatusOne = item.status === 1;
        const isSelected = selectedItemIndex === index;

        return (
            <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                <View style={[styles.item, isSelected && styles.selectedItem]}>
                    <Text>Mã yêu cầu: <Text style={{ fontWeight: 'bold' }}>{item.madathang} - {item.products?.length}</Text> Món</Text>
                    {isStatusOne && (
                        <TouchableOpacity style={styles.checkboxContainer1} onPress={handleCheckboxToggle}>
                            {isChecked ? (
                                <Feather name="check-square" size={24} color="black" />
                            ) : (
                                <Feather name="square" size={24} color="black" />
                            )}
                        </TouchableOpacity>
                    )}
                    <Feather style={styles.chevron} name={isSelected ? "chevron-up" : "chevron-down"} size={14} color="#575E69" />
                    <Text style={{ color: '#575E69' }}>Ngày đặt hàng: <Text style={{ fontWeight: 'bold' }}>{item.ngaydathang}</Text></Text>
                    <Text style={{ color: '#575E69' }}>Bộ phận đặt: <Text style={{ fontWeight: 'bold' }}>{item.bophandat === 1 ? 'Barista' : 'Unknow'}</Text></Text>
                    <View style={item.status === 2 ? styles.newStatus : styles.pendingStatus}>
                        <Text style={item.status === 2 ? styles.newStatusText : styles.pendingStatusText}>
                            {item.status === 2 ? 'Mới tạo' : 'Chờ duyệt'}
                        </Text>
                    </View>
                    {isSelected && (
                        <>
                            <View style={styles.itemContainer}>

                                {item.products?.map((product) => (
                                    <View style={styles.itemProduct}>
                                        <Text style={styles.txtitemproductname}>{product.id}. {product.product}</Text>
                                        <Text style={styles.txtitemproductdadat}><Text style={{ fontWeight: 'bold' }}>{product.dadat}</Text></Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                    {isStatusOne && (
                        <View style={styles.viewbutton}>
                            <TouchableOpacity style={styles.itembuttonproduct}><Text style={styles.txtbuttonproduct}>Xem</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.itembuttonproduct}><Text style={styles.txtbuttonproduct}>Từ chối</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.itembuttonproducts}><Text style={styles.txtbuttonproducts}>Duyệt</Text></TouchableOpacity>
                        </View>
                    )}

                </View>
            </TouchableOpacity>
        )

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.view1in1}>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxToggle}>
                        {isChecked ? (
                            <Feather name="check-square" size={24} color="black" />
                        ) : (
                            <Feather name="square" size={24} color="black" />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.txtview1in1}><Text style={{ fontWeight: 'bold' }}>{Data.length}</Text> yêu cầu</Text>
                </View>
                <View style={styles.view1in2}>
                    <TouchableOpacity style={styles.buttonview1in2}>
                        <Feather name="check-circle" size={15} color="white" />
                        <Text style={styles.txtview1in2}>Duyệt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonview1in3}>
                        <Feather name="x" size={15} color="#704232" />
                        <Text style={styles.txtview1in3} >Từ chối</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <FlatList
                keyExtractor={(item) => item.id}
                data={Data}
                renderItem={renderItem}
            /> */}
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
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    view1in1: {
        height: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    view1in2: {
        justifyContent: 'space-between',
        width: 126,
        flexDirection: 'row',
    },
    buttonview1in2: {
        backgroundColor: '#704232',
        borderRadius: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: 59,
        height: 27,
    },
    buttonview1in3: {
        borderColor: '#704232',
        borderWidth: 1,
        backgroundColor: '#F2E6E6',
        borderRadius: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: 59,
        height: 27,
    },
    txtview1in2: {
        fontSize: 13,
        color: '#FFFFFF'
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        width: '68%',
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
        width: '28%',
        height: 36,
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
        color: '#575E69',
        height: '100%',
        width: 270,
    },
    txtitemproductdadat:
    {
        fontSize: 16,
        width: 15,
        color: '#575E69',
    },
    newStatus: {
        width: '22%',
        height: 22,
        backgroundColor: '#CCD4FF26',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pendingStatus: {
        width: '22%',
        height: 22,
        backgroundColor: '#D82C0D26',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        color: '#D82C0D',
    },
    newStatusText: {
        color: '#004A94',
    },
    pendingStatusText: {
        color: '#D82C0D',
    },
    chevron: {
        marginRight: '2%',
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '10%',
        right: '10%',
    },
    selectedItem: {
        backgroundColor: '#FBEDD0', // Màu nền khi item được chọn
    },

});

const Data = [
    {
        id: 1,
        madathang: 'YCMH0001',
        ngaydathang: '08:00 20.04.2024',
        bophandat: 1,
        status: 1,
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                dadat: 8,
            }
        ]
    },
    {
        id: 2,
        madathang: 'YCMH0002',
        ngaydathang: '08:00 20.04.2024',
        bophandat: 1,
        status: 1,
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 8,
            },
        ]
    },
    {
        id: 3,
        madathang: 'YCMH0003',
        ngaydathang: '08:00 20.04.2024',
        bophandat: 1,
        status: 1,
        products: [
            {
                id: 1,
                product: 'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
                dadat: 5,
            },
            {
                id: 2,
                product: 'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
                dadat: 2,
            }
        ]
    },
];

export default ChildSc4b;
