import CategoryItemComponent from "../category-item/category-item.component";
import './directory.styles.scss';


const DirectoryComponent = ({categories}) => {
    return (
        <div className="categories-container">
        {categories.map(category => <CategoryItemComponent key={category.id} title={category.title} imageUrl={category.imageUrl}/>)}
        </div>
    );
}

export default DirectoryComponent;