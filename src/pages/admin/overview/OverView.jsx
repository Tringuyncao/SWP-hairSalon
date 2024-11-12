import { ArrowDownOutlined, ArrowUpOutlined, ShopOutlined, TeamOutlined, DollarCircleOutlined, ShoppingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Bar } from '@nivo/bar';
import { Card, Col, Row, Statistic } from 'antd';
import React, { useEffect, useState } from 'react'
import api from '../../../config/axios';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar as RechartBar } from 'recharts';

function Overview() {
    const [data, setData] = useState();
    const [monthlyData, setMonthlyData] = useState();
    const data1 = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    const fetchData = async () => {
        try {
            const response = await api.get("dashboard");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataMonthly = async () => {
        try {
            const response = await api.get("");
            setMonthlyData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDataMonthly();
    }, []);

    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Orders"
                            value={data?.totalOrders}
                            prefix={<ShoppingOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Orders"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Revenue"
                            value={data?.totalRevenue}
                            prefix={<DollarCircleOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Revenue"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Services"
                            value={data?.totalServices}
                            prefix={<AppstoreOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Services"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Staff"
                            value={data?.totalStaff}
                            prefix={<TeamOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Staff"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Store"
                            value={data?.totalStore}
                            prefix={<ShopOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="Stores"
                        />
                    </Card>
                </Col>
            </Row>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data1}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <RechartBar dataKey="pv" stackId="a" fill="#8884d8" />
                    <RechartBar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <RechartBar dataKey="uv" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Overview;
