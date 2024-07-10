import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Category = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className='my-2'>
      <Col xs="12" className='d-flex justify-content-center text-center'>
        {allCategory.length ? (
          allCategory.map((cat, index) => (
            <div key={index}>
              <button onClick={() => onFilter(cat)} className='mybtn m-2'>
                {cat}
              </button>
            </div>
          ))
        ) : (
          <div className="text-center">لا يوجد بيانات</div>
        )}
     
      </Col>
    </Row>
  );
};

export default Category;
