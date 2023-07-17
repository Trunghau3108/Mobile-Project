const fs = require('fs');

const DataAfter = () => {
    const filePath = './Data.json';

    // Đọc dữ liệu từ tệp JSON
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Đã xảy ra lỗi khi đọc tệp JSON:', err);
            return callback(err);
        }

        try {
            // Phân tích dữ liệu JSON thành đối tượng JavaScript
            const jsonData = JSON.parse(data);

            // Truy xuất dữ liệu
            const carRentals = jsonData.CarRentals;

            // Trả về danh sách các thuộc tính của CarRentals
            const carProperties = carRentals.map((car) => {
                return {
                    id: car.id,
                    brand: car.brand,
                    model: car.model,
                    year: car.year,
                    color: car.color,
                    is_rented: car.is_rented,
                    transmission: car.transmission,
                    seating_capacity: car.seating_capacity,
                    features: car.features,
                    location: car.location,
                    picture: car.picture,
                    price: car.price,
                };
            });

            // Gọi callback với danh sách thuộc tính
            callback(null, carProperties);
        } catch (error) {
            console.error('Đã xảy ra lỗi khi phân tích dữ liệu JSON:', error);
            callback(error);
        }
    });
}

export default DataAfter


