import {CheckmarkCircle} from '@ricons/ionicons5';
import {Avatar} from 'components/avatar';
import {Icon} from 'components/icon';
import {PropsWithChildren, ReactNode, useState} from 'react';
import {Tag, TagProps} from '..';

const SpaceTag = (props: PropsWithChildren<TagProps>) => {
    return <div style={{display: 'inline-block', marginRight: '10px', marginBottom: '10px'}}>
        <Tag {...props}>{ props.children}</Tag>
    </div>;
};

const Card = ({label, description, children}: PropsWithChildren<{label: string; description?: ReactNode;}>) => {
    return <div style={{display: 'flex', width: '45%', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgb(239, 239, 245)', padding: '19px 24px', marginBottom: '20px'}}>
        <div style={{fontSize: '18px', color: '#000', fontWeight: 500}}>{label}</div>
        <div style={{lineHeight: 1.6, margin: '16px 0 16px 0', fontWeight: 400}}>{description}</div>
        <div>{children}</div>
    </div>;
};
export default () => {
    const [checked, setChecked] = useState(false);
    return <div style={{width: '80%', margin: '50px auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Card label="基础" description="它有不同的类型。">
            <SpaceTag>爱在西元前</SpaceTag>
            <SpaceTag type="success">不该</SpaceTag>
            <SpaceTag type="warning">超人不会飞</SpaceTag>
            <SpaceTag type="error">手写的从前</SpaceTag>
            <SpaceTag type="info">哪里都是你</SpaceTag>
        </Card>
        <Card label="无边框">
            <SpaceTag border={false}>爱在西元前</SpaceTag>
            <SpaceTag border={false} type="success">不该</SpaceTag>
            <SpaceTag border={false} type="warning">超人不会飞</SpaceTag>
            <SpaceTag border={false} type="error">手写的从前</SpaceTag>
            <SpaceTag border={false} type="info">哪里都是你</SpaceTag>
        </Card>
        <Card label="头像" description="在标签中使用头像。">
            <SpaceTag avatar={<Avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"/>}>Anyway.FM</SpaceTag>
            <SpaceTag round border={false} avatar={<Avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"/>}>Anyway.FM</SpaceTag>
        </Card>
        <Card label="图标" description="在标签中使用图标。">
            <SpaceTag type="success" icon={<Icon><CheckmarkCircle/></Icon>}>checked</SpaceTag>
            <SpaceTag type="success" round border={false} icon={<Icon><CheckmarkCircle/></Icon>}>checked</SpaceTag>
        </Card>
        <Card label="尺寸">
            <SpaceTag size="small">爱在西元前</SpaceTag>
            <SpaceTag size="medium" type="warning">超人不会飞</SpaceTag>
            <SpaceTag size="large" type="info">哪里都是你</SpaceTag>
        </Card>
        <Card label="禁用">
            <SpaceTag disabled={true}>爱在西元前</SpaceTag>
            <SpaceTag disabled={true} type="success">不该</SpaceTag>
            <SpaceTag disabled={true} type="warning">超人不会飞</SpaceTag>
            <SpaceTag disabled={true} type="error">手写的从前</SpaceTag>
            <SpaceTag disabled={true} type="info">哪里都是你</SpaceTag>
        </Card>
        <Card label="形状" description="圆的 Tag 长得像个胶囊。">
            <SpaceTag round={true} type="success">不该</SpaceTag>
            <SpaceTag round={true} type="error">手写的从前</SpaceTag>
            <SpaceTag round={true} type="error" size="large">手写的从前</SpaceTag>
        </Card>
        <Card label="颜色" description="使用一个颜色对象定制标签的颜色。">
            <SpaceTag color={{color: '#BBB', textColor: '#555', borderColor: '#555'}}>告别夜晚 等待天亮</SpaceTag>
        </Card>
        <Card label="可选择" description="它可以变成可选择的。">
            <SpaceTag checked={checked} onCheck={setChecked} disabled={true} checkable={true}>爱在西元前</SpaceTag>
            <SpaceTag checked={checked} onCheck={setChecked} checkable={true}>不该</SpaceTag>
            <SpaceTag checked={checked} onCheck={setChecked} checkable={true}>超人不会飞</SpaceTag>
            <SpaceTag checked={checked} onCheck={setChecked} checkable={true}>手写的从前</SpaceTag>
            <SpaceTag checked={checked} onCheck={setChecked} checkable={true}>哪里都是你</SpaceTag>
        </Card>
    </div>;
};
