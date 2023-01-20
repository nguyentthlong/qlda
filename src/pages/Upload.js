import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Form from 'react-bootstrap/Form';
import UploadService from '../services/UploadService';

function Upload() {
    return (
        <div className="d-flex">
            <div>
                <Sidebar />
            </div>
            <div
                style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}
            >
                <Navbar />
                <div style={{ height: '100%' }}>
                    <div style={{ padding: '20px 5%', height: 'calc(100% - 64px)', overflowY: 'scroll' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(200px, 700px))' }}>
                            <div className="mt-5 w-100">
                                <h3 className="font-weight-bold mb-3">Quản Lý File</h3>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Upload file</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <button type="submit" className="btn btn-primary">
                                    Xác nhận
                                </button>
                            </div>

                            <div className="mt-5 w-100">
                                <h5 className="font-weight-bold mb-3">Danh Sách File Đã Tải Lên</h5>
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
