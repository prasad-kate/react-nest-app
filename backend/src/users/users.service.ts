import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save(); // Ensure this returns a User
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec(); // This returns a Promise<User[]>
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec(); // Make sure to await
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`); // Handle not found
    }
    return user; // This must return a User
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`); // Handle not found
    }
    return updatedUser; // This must return a User
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`); // Handle not found
    }
    return deletedUser; // This must return a User
  }
}
