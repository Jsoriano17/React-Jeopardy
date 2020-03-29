class Api::CardsController < ApplicationController
  before_action :set_category
  before_action :set_card, only: [:update, :destroy, :show]
  def index
    render json: @category.cards.all
  end

  def show
    render json: @card
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else
      render json: @category.card.errors, status: 422
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else 
      render json: @category.card.errors, status: 422
    end
  end

  def destroy
    @card.destroy
  end

  private
  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_card
    @card = @category.cards.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:question, :answer, :points)
  end
end
