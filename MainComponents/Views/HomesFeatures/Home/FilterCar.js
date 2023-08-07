import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity, Pressable, TouchableWithoutFeedback, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, FontAwesome, FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Post from '../../ItemComponent/Posts/Post';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import url from "../../../../urlAPI";
import axios from "axios";

const FilterCar = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPriceVisible, setModalPriceVisible] = useState(false);
    const [whereCar, setWhereCar] = useState('Khu Tao Sống');
    const [rentCar, setRentCar] = useState('Ngày/giờ nhận xe');
    const [returnCar, setReturnCar] = useState('Ngày/giờ trả xe');
    const [isLoaiXe, setIsLoaiXe] = useState('Ô tô');
    const [isChoNgoi, setIsChoNgoi] = useState(null);
    const [isHang, setIsHang] = useState('');
    const [priceCar, setPriceCar] = useState('Giá ngẫu nhiên');
    const route = useRoute();
    const nagivation = useNavigation();
    const [canChangeChoNgoi, setCanChangeChoNgoi] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [load, setLoad] = useState(false);
    const [listOfId, setListOfId] = useState([]);

    //lấy list id xe
    const getSupplier = async () => {
        let res = await axios.post(url + "/api/Supplier/GetListSuppliers");
        const listOfIds = res.data.map(item => item.id);
        setListOfId(listOfIds);
    }

    //sếp giá từ cao tới thấp
    const sortByUnitPriceDescending = () => {
        setLoad(true);
        const sortedData = data.slice().sort((a, b) => b.unitPrice - a.unitPrice);
        setData(sortedData);
        console.log('sếp giá từ cao tới thấp');
        setPriceCar('Giá từ cao tới thấp');
        setModalPriceVisible(false);
        setLoad(false);
    }

    //sếp giá từ thấp tới cao
    const sortByUnitPriceAscending = () => {
        setLoad(true);
        const sortedData = data.slice().sort((a, b) => a.unitPrice - b.unitPrice);
        setData(sortedData);
        console.log('sếp giá từ thấp tới cao');
        setPriceCar('Giá từ thấp tới cao');
        setModalPriceVisible(false);
        setLoad(false);
    }

    const formatUnitPrice = (unitPrice) => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

        return formatter.format(unitPrice).replace(/\B(?=(\d{3})+(?!\d))/g, "\n");
    }

    const handleSelectCar = () => {
        setIsLoaiXe('Ô tô');
        setCanChangeChoNgoi(true);
    };

    const handleSelectMoto = () => {
        setIsLoaiXe('Mô tô');
        setCanChangeChoNgoi(false);
        setIsChoNgoi(null);
    };

    const handleSelectChoNgoi = (choNgoi) => {
        if (canChangeChoNgoi) {
            setIsChoNgoi(choNgoi);
        }
    };

    const handleFilter = () => {
        setModalVisible(false);
    };

    const handleLoc = async () => {
        setLoad(true);
        try {
            let payload = {
                Seats: isChoNgoi,
                TypeCar: isLoaiXe,
                Id: isHang
            }
            let res = await axios.post(url + "/api/products/SearchProduct", payload);
            if (res.status === 200) {
                setData(res.data);
                setIsLoaiXe('Ô tô');
                setCanChangeChoNgoi(true);
                setIsHang('');
            }
            setLoad(false);
        } catch (error) {
            console.log("Lỗi hệ thống" + error)
            alert("Không tìm thấy xe trong hệ thống");
        }
    }

    useEffect(() => {
        setWhereCar(route.params.whereCar);
        setRentCar(route.params.selectedRentCar);
        setReturnCar(route.params.selectedReturnCar);
        handleLoc();
        getSupplier();
    }, [isLoaiXe, isChoNgoi, isHang]);

    return (
        <>
            {/* Content */}
            <View style={styles.container}>
                {/* Modal Lọc */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                >
                    <TouchableOpacity style={styles.outModal} onPress={() => { setModalVisible(false) }} />

                    <View style={styles.inModal}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 20 }}>Lọc xe phù hợp</Text>

                        {/* Loại Xe */}
                        <View style={styles.loaiXe}>
                            <Text style={styles.textModal}>Loại xe</Text>
                            <View style={styles.loaiXeBoxView}>
                                <TouchableOpacity
                                    style={[
                                        styles.loaiXeBox,
                                        isLoaiXe === 'Ô tô' && { backgroundColor: '#136a95' },
                                    ]}
                                    onPress={handleSelectCar}
                                >
                                    <FontAwesome
                                        name="car"
                                        size={30}
                                        color={isLoaiXe === 'Ô tô' ? 'white' : 'black'}
                                    />
                                    <Text
                                        style={[
                                            styles.textBox,
                                            isLoaiXe === 'Ô tô' && { color: 'white' },
                                        ]}
                                    >
                                        Ô tô
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.loaiXeBox,
                                        isLoaiXe === 'Mô tô' && { backgroundColor: '#136a95' },
                                    ]}
                                    onPress={handleSelectMoto}
                                >
                                    <FontAwesome
                                        name="motorcycle"
                                        size={30}
                                        color={isLoaiXe === 'Mô tô' ? 'white' : 'black'}
                                    />
                                    <Text
                                        style={[
                                            styles.textBox,
                                            isLoaiXe === 'Mô tô' && { color: 'white' },
                                        ]}
                                    >
                                        Mô tô
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        {/* Chỗ ngồi Xe */}
                        <View style={styles.choNgoiXe}>
                            <Text style={styles.textModal}>Chỗ ngồi</Text>
                            <TouchableOpacity
                                style={[
                                    styles.loaiXeBox,
                                    isChoNgoi === null && { backgroundColor: '#136a95' },
                                ]}
                                onPress={() => { handleSelectChoNgoi(null) }}
                            >
                                <Text
                                    style={[
                                        styles.textBox,
                                        isChoNgoi === null && { color: 'white' },
                                    ]}
                                >
                                    Tất cả
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.loaiXeBoxView}>
                                <TouchableOpacity
                                    style={[
                                        styles.loaiXeBox,
                                        isChoNgoi === 4 && { backgroundColor: '#136a95' },
                                    ]}
                                    onPress={() => { handleSelectChoNgoi(4) }}
                                >
                                    <FontAwesome
                                        name="car"
                                        size={30}
                                        color={isChoNgoi === 4 ? 'white' : 'black'}
                                    />
                                    <Text
                                        style={[
                                            styles.textBox,
                                            isChoNgoi === 4 && { color: 'white' },
                                        ]}
                                    >
                                        4 Chỗ
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.loaiXeBox,
                                        isChoNgoi === 5 && { backgroundColor: '#136a95' },
                                    ]}
                                    onPress={() => { handleSelectChoNgoi(5) }}
                                >
                                    <FontAwesome
                                        name="car"
                                        size={30}
                                        color={isChoNgoi === 5 ? 'white' : 'black'}
                                    />
                                    <Text
                                        style={[
                                            styles.textBox,
                                            isChoNgoi === 5 && { color: 'white' },
                                        ]}
                                    >
                                        5 Chỗ
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.loaiXeBox,
                                        isChoNgoi === 7 && { backgroundColor: '#136a95' },
                                    ]}
                                    onPress={() => { handleSelectChoNgoi(7) }}
                                >
                                    <FontAwesome
                                        name="car"
                                        size={30}
                                        color={isChoNgoi === 7 ? 'white' : 'black'}
                                    />
                                    <Text
                                        style={[
                                            styles.textBox,
                                            isChoNgoi === 7 && { color: 'white' },
                                        ]}
                                    >
                                        7 Chỗ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Hãng Xe */}
                        <View style={styles.loaiXe}>
                            <Text style={styles.textModal}>Hãng xe</Text>
                            <View style={styles.loaiXeBoxView}>
                                <SelectDropdown
                                    buttonStyle={styles.selectHang}

                                    data={listOfId}
                                    onSelect={(selectItem, index) => {
                                        setIsHang(selectItem);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                                <Entypo name="chevron-down" size={30} color="gray" style={{ right: 45, top: 15 }} />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.inModalDong} onPress={() => { handleFilter() }}>
                            <Text style={[styles.textModal, { color: 'white' }]}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                {/*Modal price*/}
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalPriceVisible}
                >
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { setModalPriceVisible(false) }} />
                    <View style={styles.inModalP}>
                        <View style={styles.inModalPTouch}>
                            <Text style={styles.textModal}>Sắp xếp theo thứ tự </Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.inModalPTouch, { borderTopWidth: 2, borderBottomWidth: 2 }]}
                            onPress={() => {
                                sortByUnitPriceDescending()
                            }}
                        >
                            <AntDesign name="arrowdown" size={24} color="black" />
                            <Text style={styles.textModal}>Giá từ cao tới thấp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.inModalPTouch}
                            onPress={() => {
                                sortByUnitPriceAscending()
                            }}
                        >
                            <AntDesign name="arrowup" size={24} color="black" />
                            <Text style={styles.textModal}>Giá từ thấp tới cao</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>

                {/* Heading */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerLocation} onPress={() => { nagivation.goBack(); }}>
                        <Entypo name="location" size={24} color="black" />
                        <View style={styles.headerBoxText}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{whereCar}</Text>
                            <Text>{rentCar}</Text>
                            <Text>{returnCar}</Text>
                        </View>
                        <FontAwesome name="exchange" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.headerLocation, { height: '20%', marginVertical: 20 }]}
                        onPress={() => { setModalVisible(true) }}
                    >
                        <FontAwesome5 name="clipboard-list" size={24} color="black" />
                        <Text style={styles.headerBoxText}>{isLoaiXe}, {isChoNgoi}, {isHang}</Text>
                        <AntDesign name="caretdown" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.headerLocation, { height: '20%' }]} onPress={() => { setModalPriceVisible(true) }}>
                        <Ionicons name="logo-usd" size={24} color="black" />
                        <Text style={styles.headerBoxText}>{priceCar}</Text>
                        <AntDesign name="caretdown" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={styles.body}>
                    {load ? (
                        <ActivityIndicator size="large" />
                    )
                        :
                        (
                            <FlatList
                                style={{ marginBottom: 70 }}
                                data={data}
                                renderItem={({ item }) => (
                                    <Post
                                        giamgia={item.discount}
                                        tenxe={item.name}
                                        gia={formatUnitPrice(item.unitPrice)}
                                        imguri={item.image}
                                        onPress={() => {
                                            nagivation.navigate("CarDetail", {
                                                id: item.id,
                                                coupon: item.discount,
                                                whereCar: route.params.whereCar,
                                                rentCar: route.params.selectedRentCar,
                                                returnCar: route.params.selectedReturnCar,
                                            });
                                        }}
                                        map="Map"
                                        kieuxe={item.automotives.length > 0 ? item.automotives[0]?.seats : 'Không hỗ trợ'}
                                        nhienlieu={item.automotives.length > 0 ? item.automotives[0]?.fuel : 'Không hỗ trợ'}
                                        hopso={item.automotives.length > 0 ? item.automotives[0]?.engine : 'Không hỗ trợ'}
                                        tienich1={item.automotives.length > 0 ? (item.automotives[0]?.ac ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                        tienich2={item.automotives.length > 0 ? (item.automotives[0]?.gps ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                        tienich3={item.automotives.length > 0 ? (item.automotives[0]?.bluetooth ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                        khcach={item.automotives.length > 0 ? item.automotives[0]?.location : 'Không xa'}
                                    />
                                )}
                            />
                        )
                    }
                </View>
                <BottomTabComp/>

            </View>
        </>

    )
}

export default FilterCar

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //Heading css
    header: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLocation: {
        backgroundColor: '#ececec',
        width: '90%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    },
    headerBoxText: {
        width: '60%',
    },

    //Modal css
    outModal: {
        height: '20%',
    },
    inModal: {
        backgroundColor: 'white',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textModal: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textBox: {
        fontSize: 16,
    },
    loaiXe: {
        height: '20%',
        width: '90%',
        justifyContent: 'center',
    },
    loaiXeBoxView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    loaiXeBox: {
        backgroundColor: '#ececec',
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choNgoiXe: {
        height: '40%',
        width: '90%',
        justifyContent: 'center',
    },
    inModalDong: {
        backgroundColor: '#136a95',
        width: '90%',
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    selectHang: {
        width: '100%',
        borderWidth: 1,
        height: 60,
        borderRadius: 10,
    },

    //Modal Price css
    inModalP: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '60%',
        height: '30%',
        top: '30%',
        left: '20%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inModalPTouch: {
        width: '90%',
        height: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    //body css
    body: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});