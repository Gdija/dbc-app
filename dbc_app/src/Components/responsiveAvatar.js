import { Avatar, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ResponsiveAvatar({ icon }) {
    const isSmallScreen = useMediaQuery('(max-width: 576px)');  // sm breakpoint
    const isMediumScreen = useMediaQuery('(min-width: 577px) and (max-width: 768px)');  // md breakpoint
    const isLargeScreen = useMediaQuery('(min-width: 769px)');  // lg breakpoint

    const avatarSize = isSmallScreen ? 34 : isMediumScreen ? 29 : isLargeScreen ? 70 : 80;

    return (
    <Avatar radius="xl" size={avatarSize} color="white" bg="black">
        <FontAwesomeIcon icon={icon} />
    </Avatar>
  );
}

export default ResponsiveAvatar;
