class Api::ExpensesController < ApplicationController

  def index
    render json: Expense.all
  end

  def create
    expense = Expense.new(expense_params)
    if expense.save
      render json: expense
    else
      render json: { errors: expense.errors.full_messages }, status: 422
    end
  end

  def update
    expense = Expense.find(params[:id])
    expense.update(complete: !expense.complete)
    render json: expense
  end

  def destroy
    Expense.find(params[:id])
    render json: { msg: 'Deleted' }
  end

  private
    def expense_params
      params.require(:expense).permit(:item, :amount, :category)
    end
end
