import { Fragment } from 'react';
import { HeaderOnlyProps } from './header-only.props';
import HeaderComponent from '../components/header/header-component';

const HeaderOnlyComponent = ({ children }: HeaderOnlyProps) => {
    return (
        <Fragment>
            <HeaderComponent />
            <div className={`container`}>
                <div className={`content`}>{children}</div>
            </div>
        </Fragment>
    );
};

export default HeaderOnlyComponent;
