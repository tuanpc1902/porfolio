import { DefaultLayoutProps } from './default-layout.props';
import HeaderComponent from '../components/header/header-component';

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="container font">
            <HeaderComponent />
            <div className={'container'}>
                <div className={'content'}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayoutComponent;
