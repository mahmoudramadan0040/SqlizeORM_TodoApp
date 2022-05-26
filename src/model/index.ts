import {Model,DataTypes} from "sequelize";
import db from '../config/database.config';

interface TodoAttributes{
    id:string;
    title:string;
    completed:boolean;
}
export class TodoInstance extends Model<TodoAttributes>{}
TodoInstance.init(
  {
      id:{
          allowNull:true,
          type:DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey:true,
        
      },
      title:{
          type:DataTypes.STRING,
          allowNull:false,
      },
      completed:{
          type:DataTypes.BOOLEAN,
          allowNull:false,
          defaultValue:false,

      }
  },{
    // Other model options go here
    sequelize:db, // We need to pass the connection instance
    modelName: 'todos' // We need to choose the model name
  }
);