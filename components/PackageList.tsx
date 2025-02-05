import { FlatList, ViewProps, ListRenderItemInfo } from "react-native";
import { TextType } from "./elements/TextType";
import { Card } from "./elements/Card";
import { PackageProps, Packages } from "@/constants/Packages";

type PackagesProps = ViewProps & {
    item: PackageProps,
}

const Package = ({ item: { name, description, duration, price, inclusions, maxPeople } }: PackagesProps) => {
    return (
        <Card landscape>
            <TextType type='subtitle' style={{ paddingHorizontal: 10 }}>{name}</TextType>
            <TextType type='defaultSemiBold' style={{ paddingHorizontal: 10 }}>
                ₹ {price} |
                <TextType style={{ paddingHorizontal: 10 }}> {maxPeople} Person</TextType>
            </TextType>
            <TextType type='default' style={{ paddingHorizontal: 10 }}>{description}</TextType>
        </Card>
    )
}

export const PackagesList = () => {
    return (
        <FlatList
            horizontal showsHorizontalScrollIndicator={false}
            data={Packages}
            renderItem={({ item }) =>
                <Package item={item} />}
        />
    )
}
