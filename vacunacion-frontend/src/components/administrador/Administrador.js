import React, { useEffect, useState } from 'react'
import apiService from '../../services/apiService'
import { Form, Input, Button, Checkbox, Row, Col, Layout, Table } from 'antd';

import { AdministradorBar } from './AdministradorBar'
import { Tables } from './Tables';

const { Header, Footer, Sider, Content } = Layout;

export const Administrador = () => {

    const [form] = Form.useForm();

    const [empleados, setEmpleados] = useState([])

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Cedula',
            dataIndex: 'cedula',
            key: 'cedula',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido',
        },
        {
            title: 'Correo',
            dataIndex: 'correo',
            key: 'correo',
        },
        /*
        {
            title: 'Opciones',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/dashboard/cliente/${record.id}`}>
                        <Tooltip title="Editar">
                            <FormOutlined style={{ fontSize: 15 }} />
                        </Tooltip>
                    </Link>
                </Space>
            ),
        },
        */
    ];

    const onFinish = async (values) => {
        console.log('Success:', values);

        const response = await apiService.post('empleados',
            {
                cedula: values.cedula,
                nombre: values.nombre,
                apellido: values.apellido,
                correo: values.correo,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        form.resetFields();
        getdata();
    };

    const getdata = async () => {

        const response = await apiService.get('empleados',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        setEmpleados(response.data)
        //console.log(response)

    };

    const modempleado = async (values) => {
        console.log('Success:', values);

        const response = await apiService.put('empleados',
            {
                cedula: values.cedula,
                nombre: values.nombre,
                apellido: values.apellido,
                correo: values.correo,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        form.resetFields();
        getdata();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        getdata()
    }, [])

    return (
        <Layout>
            <AdministradorBar />
            <Content style={{ paddingTop: "50px" }}>
                <Row justify="center" align="middle">
                    <Col md={12}>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 20,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Cedula"
                                name="cedula"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el numero de cedula',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (value.length == 10) {
                                                return Promise.resolve();

                                            } else {
                                                return Promise.reject('Debe contener 10 numeros');
                                            }
                                        },
                                    }),
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nombre"
                                name="nombre"
                                rules={[
                                    { required: true, message: 'Ingrese el nombre' },
                                    {
                                        pattern: new RegExp(/^[a-zA-Z]*$/),
                                        message: "No acepta numeros o caracteres especiales"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Apellido"
                                name="apellido"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el apellido!',
                                    },
                                    {
                                        pattern: new RegExp(/^[a-zA-Z]*$/),
                                        message: "No acepta numeros o caracteres especiales"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Correo"
                                name="correo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el correo!',
                                        type: 'email'
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Guardar
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>

                <Row justify="center" align="middle">
                    <Col md={24}>
                        <Table dataSource={empleados} columns={columns} />;

                        <Tables dataEmpleados={empleados}>

                        </Tables>
                    </Col>
                </Row>
            </Content>
        </Layout>

    );
};