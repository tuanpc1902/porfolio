import {HomeComponentProps} from '~/app/pages/home/home-component.props';
import {withTranslation} from 'react-i18next';
import {TRANSLATION_NAMESPACES} from '~/app/constant/common.constant';

const HomeComponent = (props: HomeComponentProps) => {
    const { t } = props;
    return <span className="text-white">Home Page</span>;
};

export default withTranslation(TRANSLATION_NAMESPACES.HOME_PAGE)(HomeComponent);
