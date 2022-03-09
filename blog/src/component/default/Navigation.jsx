import Image from 'next/image';
import Link from 'next/link';
import NavigationStyle from './NavigationStyle';

const Navigation = () => {
    return (
        <>
            <NavigationStyle />

            <div className="navigation-box">
                <ul>
                    <li>
                        <Link href="/status">
                            <a href="/status">
                                <div>
                                    <Image
                                        src="/image/icon/icon-loading.png"
                                        alt="상태 아이콘"
                                        layout="responsive"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/animation">
                            <a href="/animation">
                                <div>
                                    <Image
                                        src="/image/icon/icon-animation.png"
                                        alt="상태 아이콘"
                                        layout="responsive"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/study">
                            <a href="/study">
                                <div>
                                    <Image
                                        src="/image/icon/icon-study.png"
                                        alt="상태 아이콘"
                                        layout="responsive"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
