import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Bar } from '@nivo/bar';
import { Card, Col, Row, Statistic } from 'antd';
import React, { useEffect, useState } from 'react'
import api from '../../../config/axios';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Overview() {
    const [data, setData] = useState();
    const [monthlyData, setMonthlyData] = useState();
    const data1 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const fetchData = async () => {
        try {
            const respone = await api.get("dashboard");
            console.log(respone.data);
            setData(respone.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataMonthly = async () => {
        try {
            const respone = await api.get("");
            console.log(respone.data, monthlyData);
            setMonthlyData(respone.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDataMonthly();
    }, []);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return <div>
        <Row gutter={16}>


            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total Orders"
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        value={data?.totalOrders}
                        suffix="Orders"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total Revenue"
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        value={data?.totalRevenue}
                        suffix="Revenue"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total Services"
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        value={data?.totalServices}
                        suffix="Services"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total Staff"
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        value={data?.totalStaff}
                        suffix="Staff"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total Store"
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        value={data?.totalStore}
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
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    </div>

}

export default Overview